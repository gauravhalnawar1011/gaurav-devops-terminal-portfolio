// src/components/BadgeTexture.js
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function BadgeTexture({ user }) {
  return (
    <group>
      <mesh>
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial color="#0a192f" side={THREE.DoubleSide} />
      </mesh>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        fontSize={0.3}
        position={[0, 0.3, 0.1]}
      >
        {user.name || 'User'}
      </Text>
      <Text
        color="#64ffda"
        anchorX="center"
        anchorY="middle"
        fontSize={0.2}
        position={[0, -0.2, 0.1]}
      >
        DevOps Engineer
      </Text>
    </group>
  );
}