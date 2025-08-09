// import React from 'react';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import { Html } from '@react-three/drei';
// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// export default function IDCard() {
//   const bgTexture = useLoader(TextureLoader, background);
//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);

//   return (
//     <group position={[0, 0, 0]}>
//       {/* ID Card Base */}
//       <mesh position={[0, 0, 0]}>
//         <planeGeometry args={[2.5, 4]} />
//         <meshStandardMaterial map={bgTexture} />
//       </mesh>

//       {/* Profile Image */}
//       <mesh position={[0, -0.3, 0.01]}>
//         <planeGeometry args={[2, 2.5]} />
//         <meshStandardMaterial map={profileTexture} />
//       </mesh>

//       {/* Logo */}
//       <mesh position={[-0.9, 1.6, 0.01]}>
//         <planeGeometry args={[0.5, 0.5]} />
//         <meshStandardMaterial map={logoTexture} transparent />
//       </mesh>

//       {/* Name */}
//       <Html position={[0.6, 1.6, 0.02]}>
//         <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1rem' }}>gateremark</div>
//       </Html>

//       {/* Strap (Lanyard) */}
//       <mesh position={[0, 2.5, 0]}>
//         <cylinderGeometry args={[0.02, 0.02, 2, 16]} />
//         <meshStandardMaterial color={'black'} />
//       </mesh>
//     </group>
//   );
// }

// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import { Html } from '@react-three/drei';
// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// export default function IDCard() {
//   const bgTexture = useLoader(TextureLoader, background);
//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const backBgTexture = useLoader(TextureLoader, background);
//   // const qrCode = useLoader(TextureLoader, '/assets/qr-code.png');

//   return (
//     <group position={[0, 0, 0]}>
//       {/* FRONT SIDE */}
//       <group position={[0, 0, 0.01]}>
//         <mesh>
//           <planeGeometry args={[3, 4]} />
//           <meshStandardMaterial map={bgTexture} />
//         </mesh>

//         {/* Profile Image */}
//         <mesh position={[0, -0.2, 0.01]}>
//           <planeGeometry args={[2, 2.5]} />
//           <meshStandardMaterial map={profileTexture} />
//         </mesh>

//         {/* Logo */}
//         <mesh position={[-0.9, 1.6, 0.01]}>
//           <planeGeometry args={[0.5, 0.5]} />
//           <meshStandardMaterial map={logoTexture} transparent />
//         </mesh>

//         {/* Name */}
//         <Html position={[0.6, 1.6, 0.02]}>
//           <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1rem' }}>sinojiyamanthan</div>
//         </Html>
//       </group>

//       {/* BACK SIDE */}
//       <group rotation={[0, Math.PI, 0]} position={[0, 0, -0.01]}>
//         <mesh>
//           <planeGeometry args={[2.5, 4]} />
//           <meshStandardMaterial map={backBgTexture} />
//         </mesh>

//         {/* QR Code */}
//         {/* <mesh position={[0, -0.5, 0.01]}>
//           <planeGeometry args={[1.5, 1.5]} />
//           <meshStandardMaterial map={qrCode} transparent />
//         </mesh> */}

//         {/* Contact info */}
//         <Html position={[0, 1.3, 0.02]}>
//           <div style={{ textAlign: 'center', color: '#fff', fontSize: '0.8rem' }}>
//             Employee ID: 123456 <br />
//             Email: user@example.com <br />
//             www.gateremark.com
//           </div>
//         </Html>
//       </group>

//       {/* Strap (Lanyard) */}
//       <mesh position={[0, 2.5, 0]}>
//         <cylinderGeometry args={[0.02, 0.02, 2, 16]} />
//         <meshStandardMaterial color={'black'} />
//       </mesh>
//     </group>
//   );
// }


// import { useRef, useState } from 'react';
// import { useFrame, useLoader } from '@react-three/fiber';
// import { TextureLoader, DoubleSide } from 'three';
// import { Html } from '@react-three/drei';
// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';
// import * as THREE from 'three';

// export default function IDCard() {
//   const cardRef = useRef();

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   // Add slight card sway
//   useFrame(() => {
//     if (cardRef.current) {
//       cardRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
//     }
//   });

//   return (
//     <group>
//       {/* Strap */}
//       <mesh position={[0, 2.5, 0]}>
//         <cylinderGeometry args={[0.02, 0.02, 2.5, 16]} />
//         <meshStandardMaterial color={'black'} />
//       </mesh>

//       {/* ID Card with slight bend */}
//       <group ref={cardRef} position={[0, 0, 0]}>
//         {/* Main Card */}
//         <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
//           <planeGeometry args={[2.5, 4, 64, 64]} />
//           <meshStandardMaterial map={woodTexture} side={DoubleSide} />
//         </mesh>

//         {/* Profile Photo */}
//         <mesh position={[0, 0.2, 0.01]}>
//           <planeGeometry args={[2, 2.4]} />
//           <meshStandardMaterial map={profileTexture} />
//         </mesh>

//         {/* Logo */}
//         <mesh position={[-0.85, 1.6, 0.02]}>
//           <planeGeometry args={[0.4, 0.4]} />
//           <meshStandardMaterial map={logoTexture} transparent />
//         </mesh>

//         {/* Name */}
//         <Html position={[0.5, 1.6, 0.03]}>
//           <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1rem' }}>
//             Sinojiyamanthan
//           </div>
//         </Html>

//       </group>
//     </group>
//   );
// }

// src/components/IDCard.jsx
// import { useRef } from 'react';
// import { useFrame, useLoader } from '@react-three/fiber';
// import { TextureLoader, Shape, ShapeGeometry  } from 'three';
// import { Html, Text } from '@react-three/drei';


// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// export default function ID() {
//   const cardRef = useRef();

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   // Animate card sway
//   useFrame(() => {
//     if (cardRef.current) {
//       cardRef.current.rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
//     }
//   });

//   // Create card with rounded corners
//   const cardWidth = 2.5;
//   const cardHeight = 4;
//   const cornerRadius = 0.15;

//   const roundedRectShape = new Shape();

//   // Define rounded rectangle path
//   roundedRectShape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   roundedRectShape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   roundedRectShape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   roundedRectShape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   roundedRectShape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   roundedRectShape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   roundedRectShape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   roundedRectShape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   roundedRectShape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);

//   const cardGeometry = new ShapeGeometry(roundedRectShape);

//   return (
//     <group>
//       {/* Rope / Lanyard */}
// <mesh position={[0, 3.5, 0]}>
//   <cylinderGeometry args={[0.03, 0.03, 3.5, 32]} />
//   <meshStandardMaterial color="black" />
// </mesh>

// {/* Your Name on Rope */}
// <group position={[0.15, 3.5, 0]}>
//   <Text
//     fontSize={0.15}
//     color="white"
//     rotation={[Math.PI / 2, 0, 0]}
//     anchorX="center"
//     anchorY="middle"
//   >
//     Manthan Sinojiya
//   </Text>
// </group>

//       {/* Ring/Hook connecting rope and clip */}
//       <mesh position={[0, 1.8, 0]}>
//         <torusGeometry args={[0.1, 0.025, 16, 100]} />
//         <meshStandardMaterial color="gray" metalness={0.8} roughness={0.4} />
//       </mesh>

//       {/* Clip – connects to card */}
//       <mesh position={[0, 1.6, 0]}>
//         <boxGeometry args={[0.2, 0.2, 0.05]} />
//         <meshStandardMaterial color="silver" metalness={0.7} roughness={0.3} />
//       </mesh>

//       {/* Card Group */}
//       <group ref={cardRef} position={[0, 0, 0]}>
//         {/* Card Base with Rounded Corners */}
//         <mesh geometry={cardGeometry} position={[0, 0, 0]}>
//           <meshPhysicalMaterial
//             map={woodTexture}
//             side={2}
//             clearcoat={1}
//             clearcoatRoughness={0.1}
//             roughness={0.3}
//             metalness={0.1}
//             reflectivity={0.4}
//           />
//         </mesh>

//         {/* Profile Image */}
//         <mesh position={[0, 0.2, 0.01]}>
//           <planeGeometry args={[2, 2.4]} />
//           <meshStandardMaterial map={profileTexture} />
//         </mesh>

//         {/* Logo (e.g., React) */}
//         <mesh position={[-0.85, 1.6, 0.02]}>
//           <planeGeometry args={[0.4, 0.4]} />
//           <meshStandardMaterial map={logoTexture} transparent />
//         </mesh>

//         {/* Name */}
//         <Html position={[0.5, 1.6, 0.03]}>
//           <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
//             Sinojiyamamhhan
//           </div>
//         </Html>

//         {/* Info */}
//         <Html position={[0, -1.4, 0.03]}>
//           <div style={{ color: 'white', textAlign: 'center', fontSize: '0.7rem' }}>
//             <div>Employee: ID-12:1458</div>
//             <div>Email: uctieenari@lk.com</div>
//             <div>www.galenemark.com</div>
//           </div>
//         </Html>
//       </group>
//     </group>
//   );
// }

// import { useRef, useState, useMemo } from 'react';
// import { useFrame, useLoader } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ShapeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CubicBezierCurve3,
//   BufferGeometry,
//   Line,
//   LineBasicMaterial
// } from 'three';
// import { Html, Text } from '@react-three/drei';

// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// export default function ID() {
//   const cardRef = useRef();
//   const strapCurveRef = useRef();
//   const [hovered, setHovered] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const defaultColor = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: 1,
//     clearcoatRoughness: 0.05,
//     roughness: 0.2,
//     metalness: 0.1,
//     reflectivity: 0.6,
//     color: hovered ? '#ff6b6b' : '#ffffff'
//   }), [hovered]);

//   // Rounded rectangle for card shape
//   const cardWidth = 2.5;
//   const cardHeight = 4;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   const cardGeometry = new ShapeGeometry(shape);

//   // Update rope-like curve
//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     const swing = Math.sin(t * 1.5) * 0.15;

//     if (cardRef.current) {
//       cardRef.current.rotation.y = swing;
//       cardRef.current.rotation.z = Math.sin(t) * 0.05;

//       // Update strap curve positions
//       const top = new Vector3(0, 4, 0);
//       const control1 = new Vector3(-0.4, 2.5 + Math.sin(t) * 0.2, 0);
//       const control2 = new Vector3(0.4, 2 + Math.cos(t) * 0.2, 0);
//       const bottom = new Vector3(0, 1.75, 0);

//       const curve = new CubicBezierCurve3(top, control1, control2, bottom);
//       const points = curve.getPoints(20);

//       if (strapCurveRef.current) {
//         strapCurveRef.current.geometry.setFromPoints(points);
//       }
//     }
//   });

//   return (
//     <group>
//       {/* Rope-like strap as bezier curve */}
//       <line ref={strapCurveRef}>
//         <bufferGeometry />
//         <lineBasicMaterial color="black" linewidth={2} />
//       </line>

//       {/* Ring between strap and clip */}
//       <mesh position={[0, 1.75, 0]}>
//         <torusGeometry args={[0.1, 0.025, 16, 100]} />
//         <meshPhysicalMaterial color="gray" metalness={1} roughness={0.2} />
//       </mesh>

//       {/* Clip – holding the card */}
//       <mesh position={[0, 1.55, 0]}>
//         <boxGeometry args={[0.2, 0.3, 0.05]} />
//         <meshPhysicalMaterial color="silver" metalness={0.8} roughness={0.3} />
//       </mesh>

//       {/* Card */}
//       <group
//         ref={cardRef}
//         position={[0, 0, 0]}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//         onClick={() => setFlipped(!flipped)}
//       >
//         <mesh geometry={cardGeometry}>
//   <meshPhysicalMaterial
//     map={woodTexture}
//     clearcoat={1}
//     clearcoatRoughness={0.05}
//     roughness={0.2}
//     metalness={0.1}
//     reflectivity={0.6}
//     transparent={false}
//     side={2}
//     color={hovered ? '#ff6b6b' : '#ffffff'}
//   />
// </mesh>

//         {/* Profile Picture */}
//         {!flipped && (
//           <mesh position={[0, 0.2, 0.01]}>
//             <planeGeometry args={[2, 2.4]} />
//             <meshStandardMaterial map={profileTexture} />
//           </mesh>
//         )}

//         {/* Logo */}
//         {!flipped && (
//           <mesh position={[-0.85, 1.6, 0.02]}>
//             <planeGeometry args={[0.4, 0.4]} />
//             <meshStandardMaterial map={logoTexture} transparent />
//           </mesh>
//         )}

//         {/* Name */}
//         {!flipped && (
//           <Html position={[0.5, 1.6, 0.03]}>
//             <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
//               Sinojiya Manthan
//             </div>
//           </Html>
//         )}

//         {/* Info (back side) */}
//         {flipped && (
//           <Html position={[0, 0, 0.03]}>
//             <div style={{ color: 'white', textAlign: 'center', fontSize: '0.8rem' }}>
//               <div>Company: GaleneMark</div>
//               <div>ID: 12:1458</div>
//               <div>Email: uctieenari@lk.com</div>
//               <div>www.galenemark.com</div>
//             </div>
//           </Html>
//         )}
//       </group>
//     </group>
//   );
// }

// import { useRef, useState, useMemo } from 'react';
// import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ShapeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CatmullRomCurve3
// } from 'three';
// import { Html } from '@react-three/drei';
// import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import { extend } from '@react-three/fiber';

// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function ID() {
//   const card = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   const rope = useRef();

//   const [hovered, setHovered] = useState(false);
//   const [flipped, setFlipped] = useState(false);
//   const [dragged, setDragged] = useState(false);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const { size, camera } = useThree();
//   const [curve] = useState(() => new CatmullRomCurve3([
//     new Vector3(), new Vector3(), new Vector3(), new Vector3()
//   ]));

//   const defaultColor = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: 1,
//     clearcoatRoughness: 0.05,
//     roughness: 0.2,
//     metalness: 0.1,
//     reflectivity: 0.6,
//     color: hovered ? '#ff6b6b' : '#ffffff'
//   }), [hovered]);

//   const cardWidth = 2.5;
//   const cardHeight = 4;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   const cardGeometry = new ShapeGeometry(shape);

//   // Rope joints
//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, card, [[0, 0, 0], [0, 2, 0]]);

//   const vec = new Vector3();
//   const dir = new Vector3();
//   const ang = new Vector3();
//   const rot = new Vector3();

//   useFrame((state) => {
//   if (!j1.current || !j2.current || !j3.current || !fixed.current || !card.current) return;

//   if (dragged) {
//     vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
//     dir.copy(vec).sub(state.camera.position).normalize();
//     vec.add(dir.multiplyScalar(state.camera.position.length()));
//     card.current.setNextKinematicTranslation({
//       x: vec.x - dragged.x,
//       y: vec.y - dragged.y,
//       z: vec.z - dragged.z,
//     });
//   }

//   // Rope update
//   curve.points[0].copy(j3.current.translation());
//   curve.points[1].copy(j2.current.translation());
//   curve.points[2].copy(j1.current.translation());
//   curve.points[3].copy(fixed.current.translation());
//   if (rope.current?.geometry) {
//     rope.current.geometry.setPoints(curve.getPoints(32));
//   }

//   // Angular velocity update
//   ang.copy(card.current.angvel());
//   rot.copy(card.current.rotation());
//   card.current.setAngvel({
//     x: ang.x,
//     y: ang.y - rot.y * 0.25,
//     z: ang.z,
//   });
// });


//   return (
//     <group>
//       {/* Rope visual */}
//       <mesh ref={rope}>
//         <meshLineGeometry />
//         <meshLineMaterial color="black" resolution={[size.width, size.height]} lineWidth={0.3} />
//       </mesh>

//       {/* Joints */}
//       <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />

//       <RigidBody ref={j1} position={[0, 3, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j2} position={[0, 2.5, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j3} position={[0, 2, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>

//       {/* Card with physics */}
//       <RigidBody
//         ref={card}
//         type={dragged ? 'kinematicPosition' : 'dynamic'}
//       >
//         <CuboidCollider args={[cardWidth / 2, cardHeight / 2, 0.01]} />
//         <group
//           onPointerDown={(e) =>
//             setDragged(new Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
//           }
//           onPointerUp={() => setDragged(false)}
//           onPointerOver={() => setHovered(true)}
//           onPointerOut={() => setHovered(false)}
//           onClick={() => setFlipped(!flipped)}
//         >
//           <mesh geometry={cardGeometry}>
//   <meshPhysicalMaterial
//     map={woodTexture}
//     clearcoat={1}
//     clearcoatRoughness={0.05}
//     roughness={0.2}
//     metalness={0.1}
//     reflectivity={0.6}
//     color={hovered ? '#ff6b6b' : '#ffffff'}
//   />
// </mesh>


//           {!flipped && (
//             <>
//               <mesh position={[0, 0.2, 0.01]}>
//                 <planeGeometry args={[2, 2.4]} />
//                 <meshStandardMaterial map={profileTexture} />
//               </mesh>
//               <mesh position={[-0.85, 1.6, 0.02]}>
//                 <planeGeometry args={[0.4, 0.4]} />
//                 <meshStandardMaterial map={logoTexture} transparent />
//               </mesh>
//               <Html position={[0.5, 1.6, 0.03]}>
//                 <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
//                   Sinojiya Manthan
//                 </div>
//               </Html>
//             </>
//           )}

//           {/* {flipped && (
//             <Html position={[0, 0, 0.03]}>
//               <div style={{ color: 'white', textAlign: 'center', fontSize: '0.8rem' }}>
//                 <div>Company: GaleneMark</div>
//                 <div>ID: 12:1458</div>
//                 <div>Email: uctieenari@lk.com</div>
//                 <div>www.galenemark.com</div>
//               </div>
//             </Html>
//           )} */}
//         </group>
//       </RigidBody>
//     </group>
//   );
// }


// import { useRef, useState, useMemo, useEffect } from 'react';
// import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ShapeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CatmullRomCurve3,
//   Quaternion
// } from 'three';
// import { Html } from '@react-three/drei';
// import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import { extend } from '@react-three/fiber';

// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function ThreeDIdCard() {
//   const card = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   const rope = useRef();

//   const [hovered, setHovered] = useState(false);
//   const [flipped, setFlipped] = useState(false);
//   const [dragged, setDragged] = useState(false);
//   const [targetRotationY, setTargetRotationY] = useState(0);
//   const [currentRotationY, setCurrentRotationY] = useState(0);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const { size, camera, gl } = useThree();
//   const [curve] = useState(() => new CatmullRomCurve3([
//     new Vector3(0, 4, 0), new Vector3(0, 3, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 0)
//   ]));

//   const woodMaterial = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: 0.8,
//     clearcoatRoughness: 0.1,
//     roughness: 0.4,
//     metalness: 0.05,
//     reflectivity: 0.5,
//     color: hovered ? '#ff6b6b' : '#2f2f2f',
//     normalMap: woodTexture,
//     normalScale: new Vector3(0.5, 0.5, 0.5),
//   }), [hovered, woodTexture]);

//   const cardWidth = 2.5;
//   const cardHeight = 3.5;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   const cardGeometry = new ShapeGeometry(shape);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, card, [[0, 0, 0], [0, 2, 0]]);

//   const vec = new Vector3();
//   const dir = new Vector3();
//   const ang = new Vector3();
//   const rot = new Vector3();
//   const targetPos = new Vector3();

//   useEffect(() => {
//     setTargetRotationY(flipped ? Math.PI : 0);
//   }, [flipped]);

//   useFrame((state, delta) => {
//     if (!card.current || !j1.current || !j2.current || !j3.current || !fixed.current) return;

//     // Smooth rotation for flipping
//     const lerpSpeed = 0.1;
//     setCurrentRotationY((prev) => {
//       const next = prev + (targetRotationY - prev) * lerpSpeed * delta * 60;
//       if (card.current && card.current.type === 'kinematicPosition') {
//         const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), next);
//         card.current.setNextKinematicRotation(targetQuat);
//       }
//       return next;
//     });

//     // Hover tilt effect via kinematic rotation
//     if (hovered && !dragged && card.current && card.current.type === 'kinematicPosition') {
//       const mouseX = (state.pointer.x * Math.PI) / 8;
//       const mouseY = (state.pointer.y * Math.PI) / 8;
//       const tiltQuat = new Quaternion().setFromEuler(new Vector3(-mouseY * 0.1, mouseX * 0.1, 0));
//       const currentRot = card.current.rotation();
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(tiltQuat, 0.1);
//       card.current.setNextKinematicRotation(interpolatedQuat);
//     } else if (card.current && !dragged && card.current.type === 'kinematicPosition') {
//       const currentRot = card.current.rotation();
//       const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), currentRotationY);
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(targetQuat, 0.1);
//       card.current.setNextKinematicRotation(interpolatedQuat);
//     }

//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(camera);
//       dir.copy(vec).sub(camera.position).normalize();
//       vec.add(dir.multiplyScalar(camera.position.length()));
//       targetPos.copy(vec).sub(dragged);
//       if (card.current) {
//         card.current.setNextKinematicTranslation({
//           x: targetPos.x,
//           y: targetPos.y,
//           z: targetPos.z,
//         });
//       }
//     } else if (card.current) {
//       const currentPos = new Vector3().copy(card.current.translation());
//       const restPos = new Vector3(0, 0, 0);
//       const dist = currentPos.distanceTo(restPos);
//       if (dist > 0.1) {
//         const springForce = -0.05 * (currentPos.y - restPos.y);
//         currentPos.y += springForce;
//         card.current.setNextKinematicTranslation(currentPos);
//       }
//     }

//     curve.points[0].copy(j3.current.translation());
//     curve.points[1].copy(j2.current.translation());
//     curve.points[2].copy(j1.current.translation());
//     curve.points[3].copy(fixed.current.translation());
//     if (rope.current?.geometry) {
//       rope.current.geometry.setPoints(curve.getPoints(32));
//     }

//     if (card.current) {
//       ang.copy(card.current.angvel());
//       rot.copy(card.current.rotation());
//       card.current.setAngvel({
//         x: ang.x * 0.95,
//         y: (ang.y - rot.y * 0.25) * 0.95,
//         z: ang.z * 0.95,
//       });
//     }
//   });

//   return (
//     <group>
//       <mesh ref={rope}>
//         <meshLineGeometry />
//         <meshLineMaterial color="black" resolution={[size.width, size.height]} lineWidth={0.1} />
//       </mesh>

//       <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
//       <RigidBody ref={j1} position={[0, 3, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j2} position={[0, 2.5, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j3} position={[0, 2, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>

//       <RigidBody
//         ref={card}
//         type={dragged ? 'kinematicPosition' : 'dynamic'}
//         gravityScale={0.5}
//       >
//         <CuboidCollider args={[cardWidth / 2, cardHeight / 2, 0.01]} />
//         <group
//           onPointerDown={(e) => {
//             if (card.current) {
//               setDragged(new Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
//               setHovered(false);
//             }
//           }}
//           onPointerUp={() => {
//             setDragged(false);
//             setHovered(true);
//           }}
//           onPointerOver={() => !dragged && setHovered(true)}
//           onPointerOut={() => !dragged && setHovered(false)}
//           onClick={() => setFlipped(!flipped)}
//         >
//           <mesh geometry={cardGeometry}>
//             <meshPhysicalMaterial {...woodMaterial} />
//           </mesh>

//           {!flipped && (
//             <>
//               <mesh position={[0, 0, 0.01]}>
//                 <planeGeometry args={[1.5, 2]} />
//                 <meshStandardMaterial map={profileTexture} color="#ffffff" />
//               </mesh>
//               <mesh position={[-0.9, 0.9, 0.02]}>
//                 <planeGeometry args={[0.5, 0.5]} />
//                 <meshStandardMaterial map={logoTexture} transparent />
//               </mesh>
//               <Html position={[0.8, -1.2, 0.03]}>
//                 <div style={{ color: 'white', fontSize: '0.3rem', fontFamily: 'Arial' }}>
//                   gateremark
//                 </div>
//               </Html>
//             </>
//           )}
//           {flipped && (
//             <group>
//               <mesh position={[0, 0, 0.01]}>
//                 <planeGeometry args={[cardWidth - 0.2, cardHeight - 0.2]} />
//                 <meshStandardMaterial
//                   color="#1a1a1a"
//                   transparent
//                   opacity={0.7}
//                 />
//               </mesh>
//               <Html position={[0, 0.4, 0.02]}>
//                 <div style={{ color: 'white', textAlign: 'center', fontSize: '0.25rem', fontFamily: 'Arial' }}>
//                   <div>Contact: +1-800-GATERMK</div>
//                   <div>Email: info@gateremark.com</div>
//                   <div>Valid Until: 08/08/2026</div>
//                 </div>
//               </Html>
//               <Html position={[-0.6, -0.6, 0.02]}>
//                 <div style={{ color: 'white', fontSize: '0.2rem', fontFamily: 'Arial' }}>
//                   [QR Code Placeholder]
//                 </div>
//               </Html>
//             </group>
//           )}
//         </group>
//       </RigidBody>
//     </group>
//   );
// }


// import { useRef, useState, useMemo, useEffect } from 'react';
// import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ShapeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CatmullRomCurve3,
//   Quaternion,
//   BoxGeometry, // Import BoxGeometry for the clip
//   ExtrudeGeometry // Import ExtrudeGeometry to create a 3D clip
// } from 'three';
// import { Html } from '@react-three/drei';
// import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import { extend } from '@react-three/fiber';

// import profile from '../../profile.png';
// import logo from '../../logo.png';
// import background from '../../wood.png';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function ThreeDIdCard() {
//   const card = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   const rope = useRef();
//   const clip = useRef();

//   const [hovered, setHovered] = useState(false);
//   const [dragged, setDragged] = useState(false);
//   const [targetRotationY, setTargetRotationY] = useState(0);
//   const [currentRotationY, setCurrentRotationY] = useState(0);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const { size, camera, gl } = useThree();
//   const [curve] = useState(() => new CatmullRomCurve3([
//     new Vector3(0, 4, 0), new Vector3(0, 3, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 0)
//   ]));

//   const woodMaterial = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: 0.8,
//     clearcoatRoughness: 0.1,
//     roughness: 0.4,
//     metalness: 0.05,
//     reflectivity: 0.5,
//     color: hovered ? '#ff6b6b' : '#2f2f2f',
//     normalMap: woodTexture,
//     normalScale: new Vector3(0.5, 0.5, 0.5),
//   }), [hovered, woodTexture]);

//   const cardWidth = 2.5;
//   const cardHeight = 3.5;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   const cardGeometry = new ShapeGeometry(shape);

//   // --- Start of new hook clip geometry code ---
//   const hookClipWidth = 0.5;
//   const hookClipHeight = 0.7;
//   const hookClipThickness = 0.1;

//   const hookShape = new Shape();
//   hookShape.moveTo(-hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(-hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.quadraticCurveTo(-hookClipWidth / 2, hookClipHeight * 0.75, 0, hookClipHeight * 0.75);
//   hookShape.quadraticCurveTo(hookClipWidth / 2, hookClipHeight * 0.75, hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.lineTo(hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(0, -hookClipHeight / 2);

//   const hookExtrudeSettings = {
//     steps: 1,
//     depth: hookClipThickness,
//     bevelEnabled: false,
//   };
//   const clipGeometry = new ExtrudeGeometry(hookShape, hookExtrudeSettings);
//   // --- End of new hook clip geometry code ---


//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, clip, [[0, 0, 0], [0, 0.2, 0]]);

//   const vec = new Vector3();
//   const dir = new Vector3();
//   const ang = new Vector3();
//   const rot = new Vector3();
//   const targetPos = new Vector3();

//   useEffect(() => {
//     setTargetRotationY(0);
//   }, []);

//   useFrame((state, delta) => {
//     if (!card.current || !j1.current || !j2.current || !j3.current || !fixed.current || !clip.current) return;

//     const lerpSpeed = 0.1;
//     setCurrentRotationY((prev) => {
//       const next = prev + (targetRotationY - prev) * lerpSpeed * delta * 60;
//       if (clip.current && clip.current.type === 'kinematicPosition') {
//         const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), next);
//         clip.current.setNextKinematicRotation(targetQuat);
//       }
//       return next;
//     });

//     if (hovered && !dragged && clip.current && clip.current.type === 'kinematicPosition') {
//       const mouseX = (state.pointer.x * Math.PI) / 8;
//       const mouseY = (state.pointer.y * Math.PI) / 8;
//       const tiltQuat = new Quaternion().setFromEuler(new Vector3(-mouseY * 0.1, mouseX * 0.1, 0));
//       const currentRot = clip.current.rotation();
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(tiltQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     } else if (clip.current && !dragged && clip.current.type === 'kinematicPosition') {
//       const currentRot = clip.current.rotation();
//       const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), currentRotationY);
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(targetQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     }

//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(camera);
//       dir.copy(vec).sub(camera.position).normalize();
//       vec.add(dir.multiplyScalar(camera.position.length()));
//       targetPos.copy(vec).sub(dragged);
//       if (clip.current) {
//         clip.current.setNextKinematicTranslation({
//           x: targetPos.x,
//           y: targetPos.y,
//           z: targetPos.z,
//         });
//       }
//     } else if (clip.current) {
//       const currentPos = new Vector3().copy(clip.current.translation());
//       const restPos = new Vector3(0, 0, 0);
//       const dist = currentPos.distanceTo(restPos);
//       if (dist > 0.1) {
//         const springForce = -0.05 * (currentPos.y - restPos.y);
//         currentPos.y += springForce;
//         clip.current.setNextKinematicTranslation(currentPos);
//       }
//     }

//     curve.points[0].copy(j3.current.translation());
//     curve.points[1].copy(j2.current.translation());
//     curve.points[2].copy(j1.current.translation());
//     curve.points[3].copy(fixed.current.translation());
//     if (rope.current?.geometry) {
//       rope.current.geometry.setPoints(curve.getPoints(32));
//     }

//     if (clip.current) {
//       ang.copy(clip.current.angvel());
//       rot.copy(clip.current.rotation());
//       clip.current.setAngvel({
//         x: ang.x * 0.95,
//         y: (ang.y - rot.y * 0.25) * 0.95,
//         z: ang.z * 0.95,
//       });
//     }
//   });

//   return (
//     <group>
//       <mesh ref={rope}>
//         <meshLineGeometry />
//         <meshLineMaterial color="black" resolution={[size.width, size.height]} lineWidth={0.1} />
//       </mesh>

//       <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
//       <RigidBody ref={j1} position={[0, 3, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j2} position={[0, 2.5, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j3} position={[0, 2, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>

//       <RigidBody
//         ref={clip}
//         type={dragged ? 'kinematicPosition' : 'dynamic'}
//         gravityScale={0.5}
//         colliders={false}
//         position={[0, 1.8, 0]}
//       >
//         <CuboidCollider args={[hookClipWidth / 2, hookClipHeight / 2, hookClipThickness / 2]} />
//         <mesh geometry={clipGeometry}>
//           <meshStandardMaterial color="#c0c0c0" />
//         </mesh>
        
//         <group
//           ref={card}
//           position={[0, -2, 0]}
//           onPointerDown={(e) => {
//             if (clip.current) {
//               setDragged(new Vector3().copy(e.point).sub(vec.copy(clip.current.translation())));
//               setHovered(false);
//             }
//           }}
//           onPointerUp={() => {
//             setDragged(false);
//             setHovered(true);
//           }}
//           onPointerOver={() => !dragged && setHovered(true)}
//           onPointerOut={() => !dragged && setHovered(false)}
//         >
//           <CuboidCollider args={[cardWidth / 2, cardHeight / 2, 0.01]} />
//           <mesh geometry={cardGeometry}>
//             <meshPhysicalMaterial {...woodMaterial} />
//           </mesh>

//           <>
//             <mesh position={[0, 0, 0.01]}>
//               <planeGeometry args={[1.5, 2]} />
//               <meshStandardMaterial map={profileTexture} color="#ffffff" />
//             </mesh>
//             <mesh position={[-0.9, 0.9, 0.02]}>
//               <planeGeometry args={[0.5, 0.5]} />
//               <meshStandardMaterial map={logoTexture} transparent />
//             </mesh>
//             <Html position={[0.8, -1.2, 0.03]}>
//               <div style={{ color: 'white', fontSize: '0.3rem', fontFamily: 'Arial' }}>
//                 gateremark
//               </div>
//             </Html>
//           </>
//         </group>
//       </RigidBody>
//     </group>
//   );
// }

// import { useRef, useState, useMemo, useEffect } from 'react';
// import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ExtrudeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CatmullRomCurve3,
//   Quaternion,
//   PlaneGeometry,
//   MeshStandardMaterial
// } from 'three';
// import { Html } from '@react-three/drei';
// import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// import { extend } from '@react-three/fiber';

// import profile from '../../profile.png'; 
// import logo from '../../logo.png';
// import background from '../../image.png';

// extend({ MeshLineGeometry, MeshLineMaterial });

// export default function IdCard() {
//   const card = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   const rope = useRef();
//   const clip = useRef();

//   const [hovered, setHovered] = useState(false);
//   const [dragged, setDragged] = useState(false);
//   const [targetRotationY, setTargetRotationY] = useState(0);
//   const [currentRotationY, setCurrentRotationY] = useState(0);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const { size, camera } = useThree();
//   const [curve] = useState(() => new CatmullRomCurve3([
//     new Vector3(0, 4, 0), new Vector3(0, 3, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 0)
//   ]));

//   const woodMaterial = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: 0.8,
//     clearcoatRoughness: 0.1,
//     roughness: 0.4,
//     metalness: 0.05,
//     reflectivity: 0.5,
//     normalMap: woodTexture,
//     normalScale: new Vector3(0.5, 0.5, 0.5),
//   }), [hovered, woodTexture]);

//   const cardWidth = 2.5;
//   const cardHeight = 3.5;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);

//   const cardExtrudeSettings = {
//     steps: 2,
//     depth: 0.1,
//     bevelEnabled: true,
//     bevelThickness: 0.02,
//     bevelSize: 0.02,
//     bevelSegments: 2,
//   };
//   const cardGeometry = new ExtrudeGeometry(shape, cardExtrudeSettings);

//   const hookClipWidth = 0.5;
//   const hookClipHeight = 0.7;
//   const hookClipThickness = 0.1;

//   const hookShape = new Shape();
//   hookShape.moveTo(-hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(-hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.quadraticCurveTo(-hookClipWidth / 2, hookClipHeight * 0.75, 0, hookClipHeight * 0.75);
//   hookShape.quadraticCurveTo(hookClipWidth / 2, hookClipHeight * 0.75, hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.lineTo(hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(0, -hookClipHeight / 2);

//   const hookExtrudeSettings = {
//     steps: 1,
//     depth: hookClipThickness,
//     bevelEnabled: false,
//   };
//   const clipGeometry = new ExtrudeGeometry(hookShape, hookExtrudeSettings);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, clip, [[0, 0, 0], [0, 0.2, 0]]);

//   const vec = new Vector3();
//   const dir = new Vector3();
//   const ang = new Vector3();
//   const rot = new Vector3();
//   const targetPos = new Vector3();

//   useEffect(() => {
//     setTargetRotationY(0);
//   }, []);

//   useFrame((state, delta) => {
//     if (!card.current || !j1.current || !j2.current || !j3.current || !fixed.current || !clip.current) return;

//     const lerpSpeed = 0.1;
//     setCurrentRotationY((prev) => {
//       const next = prev + (targetRotationY - prev) * lerpSpeed * delta * 60;
//       if (clip.current && clip.current.type === 'kinematicPosition') {
//         const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), next);
//         clip.current.setNextKinematicRotation(targetQuat);
//       }
//       return next;
//     });

//     if (hovered && !dragged && clip.current && clip.current.type === 'kinematicPosition') {
//       const mouseX = (state.pointer.x * Math.PI) / 8;
//       const mouseY = (state.pointer.y * Math.PI) / 8;
//       const tiltQuat = new Quaternion().setFromEuler(new Vector3(-mouseY * 0.1, mouseX * 0.1, 0));
//       const currentRot = clip.current.rotation();
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(tiltQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     } else if (clip.current && !dragged && clip.current.type === 'kinematicPosition') {
//       const currentRot = clip.current.rotation();
//       const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), currentRotationY);
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(targetQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     }

//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(camera);
//       dir.copy(vec).sub(camera.position).normalize();
//       vec.add(dir.multiplyScalar(camera.position.length()));
//       targetPos.copy(vec).sub(dragged);
//       if (clip.current) {
//         clip.current.setNextKinematicTranslation({
//           x: targetPos.x,
//           y: targetPos.y,
//           z: targetPos.z,
//         });
//       }
//     } else if (clip.current) {
//       const currentPos = new Vector3().copy(clip.current.translation());
//       const restPos = new Vector3(0, 0, 0);
//       const dist = currentPos.distanceTo(restPos);
//       if (dist > 0.1) {
//         const springForce = -0.05 * (currentPos.y - restPos.y);
//         currentPos.y += springForce;
//         clip.current.setNextKinematicTranslation(currentPos);
//       }
//     }

//     curve.points[0].copy(j3.current.translation());
//     curve.points[1].copy(j2.current.translation());
//     curve.points[2].copy(j1.current.translation());
//     curve.points[3].copy(fixed.current.translation());
//     if (rope.current?.geometry) {
//       rope.current.geometry.setPoints(curve.getPoints(32));
//     }

//     if (clip.current) {
//       ang.copy(clip.current.angvel());
//       rot.copy(clip.current.rotation());
//       clip.current.setAngvel({
//         x: ang.x * 0.95,
//         y: (ang.y - rot.y * 0.25) * 0.95,
//         z: ang.z * 0.95,
//       });
//     }
//   });

//   return (
//     <group>
//       <mesh ref={rope}>
//         <meshLineGeometry />
//         <meshLineMaterial color="black" resolution={[size.width, size.height]} lineWidth={0.2} />
//       </mesh>

//       <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
//       <RigidBody ref={j1} position={[0, 3, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j2} position={[0, 2.5, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j3} position={[0, 2, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>

//       <RigidBody
//         ref={clip}
//         type={dragged ? 'kinematicPosition' : 'dynamic'}
//         gravityScale={0.5}
//         colliders={false}
//         position={[0, 1.8, 0]}
//       >
//         <CuboidCollider args={[hookClipWidth / 2, hookClipHeight / 2, hookClipThickness / 2]} />
//         <mesh geometry={clipGeometry}>
//           <meshStandardMaterial color="#c0c0c0" />
//         </mesh>
        
//         <group
//           ref={card}
//           position={[0, -2, cardExtrudeSettings.depth / 2]}
//           onPointerDown={(e) => {
//             if (clip.current) {
//               setDragged(new Vector3().copy(e.point).sub(vec.copy(clip.current.translation())));
//               setHovered(false);
//             }
//           }}
//           onPointerUp={() => {
//             setDragged(false);
//             setHovered(true);
//           }}
//           onPointerOver={() => !dragged && setHovered(true)}
//           onPointerOut={() => !dragged && setHovered(false)}
//         >
//           <CuboidCollider args={[cardWidth / 2, cardHeight / 2, cardExtrudeSettings.depth / 2]} />
//           <mesh geometry={cardGeometry}>
//             <meshPhysicalMaterial {...woodMaterial} />
//           </mesh>

//           <>
//             <mesh position={[0, 0, cardExtrudeSettings.depth / 2 + 0.001]}>
//               <planeGeometry args={[1.5, 2]} />
//               <meshStandardMaterial map={profileTexture} color="#ffffff" />
//             </mesh>
//             <mesh position={[-0.9, 0.9, cardExtrudeSettings.depth / 2 + 0.002]}>
//               <planeGeometry args={[0.5, 0.5]} />
//               <meshStandardMaterial map={logoTexture} transparent />
//             </mesh>
//             <Html position={[0.8, -1.2, cardExtrudeSettings.depth / 2 + 0.003]}>
//               <div style={{ color: 'white', fontSize: '0.3rem', fontFamily: 'Arial' }}>
//                 gateremark
//               </div>
//             </Html>
//           </>
//         </group>
//       </RigidBody>
//     </group>
//   );
// }

// import { useRef, useState, useMemo, useEffect } from 'react';
// import { useFrame, useLoader, useThree } from '@react-three/fiber';
// import {
//   TextureLoader,
//   Shape,
//   ExtrudeGeometry,
//   MeshPhysicalMaterial,
//   Vector3,
//   CatmullRomCurve3,
//   Quaternion,
//   PlaneGeometry,
//   MeshStandardMaterial
// } from 'three';
// import { Html, Line } from '@react-three/drei'; // Import Line here
// import { RigidBody, BallCollider, CuboidCollider, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
// // Removed MeshLine imports and extend call
// // import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
// // import { extend } from '@react-three/fiber';

// import profile from '../../profile-removebg-preview.png';
// import logo from '../../logo.png';
// import background from '../../image.png';

// // Removed extend call: extend({ MeshLineGeometry, MeshLineMaterial });

// export default function ThreeDIdCard() {
//   const card = useRef();
//   const fixed = useRef();
//   const j1 = useRef();
//   const j2 = useRef();
//   const j3 = useRef();
//   // We no longer need a separate ref for the rope mesh
//   // const rope = useRef(); 
//   const clip = useRef();

//   const [hovered, setHovered] = useState(false);
//   const [dragged, setDragged] = useState(false);
//   const [targetRotationY, setTargetRotationY] = useState(0);
//   const [currentRotationY, setCurrentRotationY] = useState(0);

//   const profileTexture = useLoader(TextureLoader, profile);
//   const logoTexture = useLoader(TextureLoader, logo);
//   const woodTexture = useLoader(TextureLoader, background);

//   const { size, camera, gl } = useThree();
//   const [curve] = useState(() => new CatmullRomCurve3([
//     new Vector3(0, 4, 0), new Vector3(0, 3, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 0)
//   ]));

//   const woodMaterial = useMemo(() => new MeshPhysicalMaterial({
//     map: woodTexture,
//     clearcoat: hovered ? 1.0 : 0.8,
//     clearcoatRoughness: hovered ? 0.05 : 0.1,
//     roughness: hovered ? 0.3 : 0.4,
//     metalness: hovered ? 0.1 : 0.05,
//     reflectivity: 0.5,
//     normalMap: woodTexture,
//     normalScale: new Vector3(0.5, 0.5, 0.5),
//   }), [hovered, woodTexture]);

//   // Rope material is now defined directly in the Line component
//   // const ropeMaterial = useMemo(() => new MeshLineMaterial({ ... }), [size]);

//   const cardWidth = 2.5;
//   const cardHeight = 3.5;
//   const cornerRadius = 0.15;
//   const shape = new Shape();
//   shape.moveTo(-cardWidth / 2 + cornerRadius, -cardHeight / 2);
//   shape.lineTo(cardWidth / 2 - cornerRadius, -cardHeight / 2);
//   shape.quadraticCurveTo(cardWidth / 2, -cardHeight / 2, cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.lineTo(cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.quadraticCurveTo(cardWidth / 2, cardHeight / 2, cardWidth / 2 - cornerRadius, cardHeight / 2);
//   shape.lineTo(-cardWidth / 2 + cornerRadius, cardHeight / 2);
//   shape.quadraticCurveTo(-cardWidth / 2, cardHeight / 2, -cardWidth / 2, cardHeight / 2 - cornerRadius);
//   shape.lineTo(-cardWidth / 2, -cardHeight / 2 + cornerRadius);
//   shape.quadraticCurveTo(-cardWidth / 2, -cardHeight / 2, -cardWidth / 2 + cornerRadius, -cardHeight / 2);

//   const cardExtrudeSettings = {
//     steps: 2,
//     depth: 0.1,
//     bevelEnabled: true,
//     bevelThickness: 0.02,
//     bevelSize: 0.02,
//     bevelSegments: 2,
//   };
//   const cardGeometry = new ExtrudeGeometry(shape, cardExtrudeSettings);

//   const hookClipWidth = 0.5;
//   const hookClipHeight = 0.7;
//   const hookClipThickness = 0.1;

//   const hookShape = new Shape();
//   hookShape.moveTo(-hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(-hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.quadraticCurveTo(-hookClipWidth / 2, hookClipHeight * 0.75, 0, hookClipHeight * 0.75);
//   hookShape.quadraticCurveTo(hookClipWidth / 2, hookClipHeight * 0.75, hookClipWidth / 2, hookClipHeight / 2);
//   hookShape.lineTo(hookClipWidth / 2, -hookClipHeight / 2);
//   hookShape.lineTo(0, -hookClipHeight / 2);

//   const hookExtrudeSettings = {
//     steps: 1,
//     depth: hookClipThickness,
//     bevelEnabled: false,
//   };
//   const clipGeometry = new ExtrudeGeometry(hookShape, hookExtrudeSettings);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, clip, [[0, 0, 0], [0, 0.2, 0]]);

//   const vec = new Vector3();
//   const dir = new Vector3();
//   const ang = new Vector3();
//   const rot = new Vector3();
//   const targetPos = new Vector3();

//   // Use a state variable for the rope points array
//   const [points, setPoints] = useState(curve.getPoints(32));

//   useEffect(() => {
//     setTargetRotationY(0);
//   }, []);

//   useEffect(() => {
//     if (dragged) {
//       gl.domElement.style.cursor = 'grabbing';
//     } else if (hovered) {
//       gl.domElement.style.cursor = 'grab';
//     } else {
//       gl.domElement.style.cursor = 'default';
//     }
//   }, [dragged, hovered, gl]);

//   useFrame((state, delta) => {
//     if (!card.current || !j1.current || !j2.current || !j3.current || !fixed.current || !clip.current) return;

//     const lerpSpeed = 0.1;
//     setCurrentRotationY((prev) => {
//       const next = prev + (targetRotationY - prev) * lerpSpeed * delta * 60;
//       if (clip.current && clip.current.type === 'kinematicPosition') {
//         const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), next);
//         clip.current.setNextKinematicRotation(targetQuat);
//       }
//       return next;
//     });

//     if (hovered && !dragged && clip.current && clip.current.type === 'kinematicPosition') {
//       const mouseX = (state.pointer.x * Math.PI) / 8;
//       const mouseY = (state.pointer.y * Math.PI) / 8;
//       const tiltQuat = new Quaternion().setFromEuler(new Vector3(-mouseY * 0.1, mouseX * 0.1, 0));
//       const currentRot = clip.current.rotation();
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(tiltQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     } else if (clip.current && !dragged && clip.current.type === 'kinematicPosition') {
//       const currentRot = clip.current.rotation();
//       const targetQuat = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), currentRotationY);
//       const interpolatedQuat = new Quaternion().copy(currentRot);
//       interpolatedQuat.slerp(targetQuat, 0.1);
//       clip.current.setNextKinematicRotation(interpolatedQuat);
//     }

//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(camera);
//       dir.copy(vec).sub(camera.position).normalize();
//       vec.add(dir.multiplyScalar(camera.position.length()));
//       targetPos.copy(vec).sub(dragged);
//       if (clip.current) {
//         clip.current.setNextKinematicTranslation({
//           x: targetPos.x,
//           y: targetPos.y,
//           z: targetPos.z,
//         });
//       }
//     } else if (clip.current) {
//       const currentPos = new Vector3().copy(clip.current.translation());
//       const restPos = new Vector3(0, 0, 0);
//       const dist = currentPos.distanceTo(restPos);
//       if (dist > 0.1) {
//         const springForce = -0.05 * (currentPos.y - restPos.y);
//         currentPos.y += springForce;
//         clip.current.setNextKinematicTranslation(currentPos);
//       }
//     }

//     // Update the curve points for the Line primitive
//     curve.points[0].copy(j3.current.translation());
//     curve.points[1].copy(j2.current.translation());
//     curve.points[2].copy(j1.current.translation());
//     curve.points[3].copy(fixed.current.translation());
    
//     // Update the state with new points for the Line component
//     setPoints(curve.getPoints(32));

//     if (clip.current) {
//       ang.copy(clip.current.angvel());
//       rot.copy(clip.current.rotation());
//       clip.current.setAngvel({
//         x: ang.x * 0.95,
//         y: (ang.y - rot.y * 0.25) * 0.95,
//         z: ang.z * 0.95,
//       });
//     }
//   });

//   return (
//     <group>
//       {/* Use the new Line primitive */}
//       <Line
//         points={points}
//         color="#808080"
//         lineWidth={2}
//         transparent={true}
//         opacity={0.85}
//       />

//       <RigidBody ref={fixed} type="fixed" position={[0, 4, 0]} />
//       <RigidBody ref={j1} position={[0, 3, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j2} position={[0, 2.5, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>
//       <RigidBody ref={j3} position={[0, 2, 0]}>
//         <BallCollider args={[0.1]} />
//       </RigidBody>

//       <RigidBody
//         ref={clip}
//         type={dragged ? 'kinematicPosition' : 'dynamic'}
//         gravityScale={0.5}
//         colliders={false}
//         position={[0, 1.8, 0]}
//       >
//         <CuboidCollider args={[hookClipWidth / 2, hookClipHeight / 2, hookClipThickness / 2]} />
//         <mesh geometry={clipGeometry}>
//           <meshStandardMaterial color="#c0c0c0" />
//         </mesh>
        
//         <group
//           ref={card}
//           position={[0, -2, cardExtrudeSettings.depth / 2]}
//           onPointerDown={(e) => {
//             if (clip.current) {
//               setDragged(new Vector3().copy(e.point).sub(vec.copy(clip.current.translation())));
//               setHovered(false);
//             }
//           }}
//           onPointerUp={() => {
//             setDragged(false);
//             setHovered(true);
//           }}
//           onPointerOver={() => !dragged && setHovered(true)}
//           onPointerOut={() => !dragged && setHovered(false)}
//         >
//           <CuboidCollider args={[cardWidth / 2, cardHeight / 2, cardExtrudeSettings.depth / 2]} />
//           <mesh geometry={cardGeometry}>
//             <meshPhysicalMaterial {...woodMaterial} />
//           </mesh>

//           <>
//             <mesh position={[0, 0, cardExtrudeSettings.depth / 2 + 0.5]}>
//               <planeGeometry args={[2, 2]} />
//               <meshStandardMaterial map={profileTexture} color='white'/>
//             </mesh>
//             <mesh position={[-0.9, 1.4, cardExtrudeSettings.depth / 2 + 0.2]}>
//               <planeGeometry args={[0.5, 0.5]} />
//               <meshStandardMaterial map={logoTexture} transparent />
//             </mesh>
//             <Html
//               position={[0.8, -1.2, cardExtrudeSettings.depth / 2 + 0.003]}
//               style={{
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 fontSize: '0.3rem',
//                 fontFamily: 'Arial',
//                 padding: '0.1rem 0.2rem',
//                 borderRadius: '0.1rem',
//                 letterSpacing: '0.05rem',
//                 textShadow: '0 0 5px black'
//               }}
//             >
//               <div>gateremark</div>
//             </Html>
//           </>
//         </group>
//       </RigidBody>
//     </group>
//   );
// }

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
import logo from '../../logo.png';
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
  const logoTexture = useLoader(TextureLoader, logo);
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
            <mesh position={[-0.9, 1.4, cardExtrudeSettings.depth / 2 + 0.2]}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshStandardMaterial map={logoTexture} transparent />
            </mesh>
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
              <div>gateremark</div>
            </Html>
          </>
        </group>
      </RigidBody>
    </group>
  );
}