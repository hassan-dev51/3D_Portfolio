"use client";
import React, { useState, useEffect, Suspense } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const ComputerCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // when we work with three js we use mesh tag instead of div
  return <mesh></mesh>;
};

export default ComputerCanvas;
