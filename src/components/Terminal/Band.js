import * as THREE from 'three';
import { RenderTexture, Text, useTexture } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useThree, useFrame, extend } from '@react-three/fiber';
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import profileImage from '../../profile.png';
import wood from '../../wood.png';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Band({ user, nodes, texture }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]));

  const [dragged, drag] = useState(false);
  
  // Load textures
  const photoTexture = useTexture(user.image || profileImage);
  const woodTexture = useTexture(texture || wood);

  // Rope Joints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.8, { stiffness: 100, damping: 10 }]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.8, { stiffness: 100, damping: 10 }]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.8, { stiffness: 100, damping: 10 }]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);


  useFrame((state) => {
    if (dragged && card.current) {
      const vec = new THREE.Vector3(
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        0.5
      );
      card.current.setNextKinematicTranslation(vec);
    }

    if (band.current && j1.current && j2.current && j3.current && fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  const BadgeTexture = () => (
    <group>
      {/* Wooden Background */}
      <mesh>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial 
          map={photoTexture.woodMap}
          roughness={0.8}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Photo Frame */}
      <group position={[0, 0.3, 0.1]}>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.3, 1.6]} />
          <meshBasicMaterial color="#5D4037" side={THREE.DoubleSide} />
        </mesh>
        <mesh>
          <planeGeometry args={[1.2, 1.5]} />
          <meshStandardMaterial 
            map={photoTexture.map}
            side={THREE.DoubleSide}
            toneMapped={false} // Makes colors more vibrant
          />
        </mesh>
      </group>
      
      {/* Name and Title */}
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
        position={[0, -0.7, 0.1]}
        outlineColor="#000000"
        outlineWidth={0.02}
      >
        {user?.name || 'User'}
      </Text>
      <Text
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        fontSize={0.2}
        position={[0, -0.9, 0.1]}
        outlineColor="#000000"
        outlineWidth={0.02}
      >
        {user?.title || 'DevOps Engineer'}
      </Text>
    </group>
  );

   return (
    <>
      <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
      <RigidBody 
        position={[0.5, 2.5, 0]} 
        ref={j1}
        colliders={false}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody 
        position={[1, 2.5, 0]} 
        ref={j2}
        colliders={false}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody 
        position={[1.5, 2.5, 0]} 
        ref={j3}
        colliders={false}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>

      <RigidBody 
        ref={card} 
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        onPointerDown={() => drag(true)}
        onPointerUp={() => drag(false)}
        colliders={false}
        position={[2, 1.5, 0]} // Adjust starting position
        linearDamping={5} // Add damping to reduce swinging
        angularDamping={5} // Add damping to reduce rotation
      >
        <CuboidCollider args={[0.8, 1.125, 0.01]} />
        <mesh>
          <planeGeometry args={[1.6, 2.25]} />
          <meshPhysicalMaterial
            clearcoat={1}
            clearcoatRoughness={0.15}
            metalness={0.5}
            roughness={0.3}
          >
            <RenderTexture attach="map" width={1024} height={1024}>
              <BadgeTexture />
            </RenderTexture>
          </meshPhysicalMaterial>
        </mesh>
      </RigidBody>

      <mesh ref={band}>
        <meshLineGeometry attach="geometry" />
        <meshLineMaterial 
          attach="material"
          color="white" 
          lineWidth={0.1} 
          transparent 
          opacity={0.8}
        />
      </mesh>
    </>
  );
}