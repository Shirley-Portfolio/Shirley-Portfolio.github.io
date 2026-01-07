import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4">
      <SectionHeading
        heading="Computer Engineering with a concentration in Embedded Systems"
        subheading="Shirley is a second year engineering student building at the intersection of hardware and software. Currrently a student at GMU conducting research on GPS-denied navigation systems for compact, Air Force-funded orb-based drones, focusing on sensor integration and control loops. R&D utilizing compact, orb-based drones, requiring systematic application of troubleshooting skills to maintain and test advanced control systems and operational strategies. Contributing to an internal side project studying Spiking Neural Networks and implementing FPGA prototyping to integrate bio-inspired computing into robotics platforms"
      />
      {/* <Letter /> */}
    </div>
  );
}
