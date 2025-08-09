import { useRef, useState, useMemo, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  TextureLoader,
  Shape,
  ExtrudeGeometry,
  MeshPhysicalMaterial,
  Vector3,
  CatmullRomCurve3,
  Quaternion,
  PlaneGeometry,
  MeshStandardMaterial
} from 'three';
import { Html, Line } from '@react-three/drei';
import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';

// Import image assets
import profile from '../../profile.png';
import background from '../../image.png';

export default function ThreeDIdCard() {
  const card = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const clip = useRef();

  const [hovered, setHovered] = useState(false);
  const [dragged, setDragged] = useState(false);
  const [targetRotationY, setTargetRotationY] = useState(0);
  const [currentRotationY, setCurrentRotationY] = useState(0);

  const profileTexture = useLoader(TextureLoader, profile);
  // const logoTexture = useLoader(TextureLoader, logo);
  const woodTexture = useLoader(TextureLoader, background);

  const { gl, camera } = useThree();
  const [curve] = useState(() => new CatmullRomCurve3([
    new Vector3(0, 4, 0), new Vector3(0, 3, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 0)
  ]));

  const woodMaterial = useMemo(() => new MeshPhysicalMaterial({
    map: woodTexture,
    clearcoat: hovered ? 1.0 : 0.8,
    clearcoatRoughness: hovered ? 0.05 : 0.1,
    roughness: hovered ? 0.3 : 0.4,
    metalness: hovered ? 0.1 : 0.05,
    reflectivity: 0.5,
    normalMap: woodTexture,
    normalScale: new Vector3(0.5, 0.5, 0.5),
  }), [hovered, woodTexture]);

  const cardWidth = 2.5;
  const cardHeight = 3.5;
  const cornerRadius = 0.15;
  const shape = new Shape();
  shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
  shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
  shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
  shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
  shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
  shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
  shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
  shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
  shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);

  const cardExtrudeSettings = {
    steps: 2,
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
  };
  const cardGeometry = new ExtrudeGeometry(shape, cardExtrudeSettings);

  const hookClipWidth = 0.5;
  const hookClipHeight = 0.7;
  const hookClipThickness = 0.1;

  const hookShape = new Shape();
  hookShape.moveTo(-hookClipWidth / 2, -hookClipHeight / 2);
  hookShape.lineTo(-hookClipWidth / 2, hookClipHeight / 2);
  hookShape.quadraticCurveTo(-hookClipWidth / 2, hookClipHeight * 0.75, 0, hookClipHeight * 0.75);
  hookShape.quadraticCurveTo(hookClipWidth / 2, hookClipHeight * 0.75, hookClipWidth / 2, hookClipHeight / 2);
  hookShape.lineTo(hookClipWidth / 2, -hookClipHeight / 2);
  hookShape.lineTo(0, -hookClipHeight / 2);

  const hookExtrudeSettings = {
    steps: 1,
    depth: hookClipThickness,
    bevelEnabled: false,
  };
  const clipGeometry = new ExtrudeGeometry(hookShape, hookExtrudeSettings);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, clip, [[0, 0, 0], [0, 0.2, 0]]);

  const vec = new Vector3();
  const dir = new Vector3();
  const ang = new Vector3();
  const rot = new Vector3();
  const targetPos = new Vector3();

  const [points, setPoints] = useState(curve.getPoints(32));

  useEffect(() => {
    setTargetRotationY(0);
  }, []);

  useEffect(() => {
    if (dragged) {
      gl.domElement.style.cursor = 'grabbing';
    } else if (hovered) {
      gl.domElement.style.cursor = 'grab';
    } else {
      gl.domElement.style.cursor = 'default';
    }
  }, [dragged, hovered, gl]);

  useFrame((state, delta) => {
    if (!card.current || !j1.current || !j2.current || !j3.current || !fixed.current || !clip.current) return;

    const lerpSpeed = 0.1;
    setCurrentRotationY((prev) => {
      const next = prev + (targetRotationY - prev) * lerpSpeed * delta * 60;
      if (clip.current && clip.current.type === 'kinematicPosition') {
        const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), next);
        clip.current.setNextKinematicRotation(targetQuat);
      }
      return next;
    });

    if (hovered && !dragged && clip.current && clip.current.type === 'kinematicPosition') {
      const mouseX = (state.pointer.x * Math.PI) / 8;
      const mouseY = (state.pointer.y * Math.PI) / 8;
      const tiltQuat = new Quaternion().setFromEuler(new Vector3(-mouseY * 0.1, mouseX * 0.1, 0));
      const currentRot = clip.current.rotation();
      const interpolatedQuat = new Quaternion().copy(currentRot);
      interpolatedQuat.slerp(tiltQuat, 0.1);
      clip.current.setNextKinematicRotation(interpolatedQuat);
    } else if (clip.current && !dragged && clip.current.type === 'kinematicPosition') {
      const currentRot = clip.current.rotation();
      const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), currentRotationY);
      const interpolatedQuat = new Quaternion().copy(currentRot);
      interpolatedQuat.slerp(targetQuat, 0.1);
      clip.current.setNextKinematicRotation(interpolatedQuat);
    }

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(camera);
      dir.copy(vec).sub(camera.position).normalize();
      vec.add(dir.multiplyScalar(camera.position.length()));
      targetPos.copy(vec).sub(dragged);
      if (clip.current) {
        clip.current.setNextKinematicTranslation({
          x: targetPos.x,
          y: targetPos.y,
          z: targetPos.z,
        });
      }
    } else if (clip.current) {
      const currentPos = new Vector3().copy(clip.current.translation());
      const restPos = new Vector3(0, 0, 0);
      const dist = currentPos.distanceTo(restPos);
      if (dist > 0.1) {
        const springForce = -0.05 * (currentPos.y - restPos.y);
        currentPos.y += springForce;
        clip.current.setNextKinematicTranslation(currentPos);
      }
    }

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.translation());
    curve.points[2].copy(j1.current.translation());
    curve.points[3].copy(fixed.current.translation());
    
    setPoints(curve.getPoints(32));

    if (clip.current) {
      ang.copy(clip.current.angvel());
      rot.copy(clip.current.rotation());
      clip.current.setAngvel({
        x: ang.x * 0.95,
        y: (ang.y - rot.y * 0.25) * 0.95,
        z: ang.z * 0.95,
      });
    }
  });

  return (
    <group>
      <Line
        points={points}
        color="#808080"
        lineWidth={2}
        transparent={true}
        opacity={0.85}
      />

      <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
      <RigidBody ref={j1} position={[0, 3, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={j2} position={[0, 2.5, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={j3} position={[0, 2, 0]}>
        <BallCollider args={[0.1]} />
      </RigidBody>

      <RigidBody
        ref={clip}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        gravityScale={0.5}
        colliders={false}
        position={[0, 1.8, 0]}
      >
        <CuboidCollider args={[hookClipWidth / 2, hookClipHeight / 2, hookClipThickness / 2]} />
        <mesh geometry={clipGeometry}>
          <meshStandardMaterial color="#c0c0c0" />
        </mesh>
        
        <group
          ref={card}
          position={[0, -2, cardExtrudeSettings.depth / 2]}
          onPointerDown={(e) => {
            if (clip.current) {
              setDragged(new Vector3().copy(e.point).sub(vec.copy(clip.current.translation())));
              setHovered(false);
            }
          }}
          onPointerUp={() => {
            setDragged(false);
            setHovered(true);
          }}
          onPointerOver={() => !dragged && setHovered(true)}
          onPointerOut={() => !dragged && setHovered(false)}
        >
          <CuboidCollider args={[cardWidth / 2, cardHeight / 2, cardExtrudeSettings.depth / 2]} />
          <mesh geometry={cardGeometry}>
            <meshPhysicalMaterial {...woodMaterial} />
          </mesh>

          <>
            <mesh position={[0, 0, cardExtrudeSettings.depth / 2 + .5]}>
              <planeGeometry args={[2 , 2]} />
              <meshStandardMaterial map={profileTexture} color='white' />
            </mesh>
            {/* <mesh position={[-0.9, 1.4, cardExtrudeSettings.depth / 2 + 0.2]}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshStandardMaterial map={logoTexture} transparent />
            </mesh> */}
            <Html
              position={[0.8, -1.2, cardExtrudeSettings.depth / 2 + 0.003]}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontSize: '0.3rem',
                fontFamily: 'Arial',
                padding: '0.1rem 0.2rem',
                borderRadius: '0.1rem',
                letterSpacing: '0.05rem',
                textShadow: '0 0 5px black'
              }}
            >
              <div></div>
            </Html>
          </>
        </group>
      </RigidBody>
    </group>
  );
}