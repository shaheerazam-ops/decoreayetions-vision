import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ================================
   Floating Animated Sphere
================================ */
function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t * 2) * 0.2;
      meshRef.current.rotation.x = Math.cos(t) * 0.2;
      meshRef.current.rotation.y = Math.sin(t) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.6}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

/* ================================
   Floating Ring Decoration
================================ */
function FloatingDecoration({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.15, 0.05, 8, 24]} />
        <meshStandardMaterial
          color="#B8860B"
          metalness={0.8}
          roughness={0.1}
          emissive="#B8860B"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

/* ================================
   3D Event Elements
================================ */
function EventElements() {
  return (
    <>
      {/* Floating spheres */}
      <AnimatedSphere position={[-2, 1, -1]} />
      <AnimatedSphere position={[2.5, -1, 0.5]} />
      <AnimatedSphere position={[-1.5, -2, 1]} />

      {/* Decorative rings */}
      <FloatingDecoration position={[3, 2, -2]} />
      <FloatingDecoration position={[-3, 1.5, -1.5]} />
      <FloatingDecoration position={[1.5, -2.5, 1]} />

      {/* Central floating box */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 0.3, 0.1]} />
          <meshStandardMaterial
            color="#8B4513"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </Float>
    </>
  );
}

/* ================================
   Hero3D Section
================================ */
const Hero3D = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-hero">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0">
        <Canvas shadows dpr={[1, 2]} frameloop="always">
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />

            {/* Lighting setup */}
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={0.8}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#D4AF8C" />

            {/* Environment reflections */}
            <Environment preset="studio" />

            {/* Floating elements */}
            <EventElements />

            {/* Camera controls */}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <Sparkles className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="brand-title text-6xl md:text-8xl lg:text-9xl text-primary mb-4 leading-tight"
          >
            DECOREAYETIONS
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="h-1 w-24 bg-luxury mx-auto mb-6 origin-left"
          />

          {/* Subtitle with shimmer gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="elegant-text text-2xl md:text-4xl lg:text-5xl text-foreground mb-6 font-bold"
          >
            Where Dreams Meet{" "}
            <span className="relative inline-block font-medium shimmer-text">
              Elegance
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your special moments into extraordinary memories with our bespoke
            event planning and design services.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury text-lg px-8 py-6 transition-elegant"
            >
              <Link to="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground text-lg px-8 py-6 transition-elegant"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </motion.div>

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>Interact with the 3D scene above ✨</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-luxury rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Shimmer CSS */}
      <style>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #d4af8c 0%,
            #ffd700 25%,
            #fff8dc 50%,
            #ffd700 75%,
            #d4af8c 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero3D;