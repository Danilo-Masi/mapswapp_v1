import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollTrigger({ box }: any) {
    gsap.to(`${box}`, {
        scrollTrigger: `${box}`, // start animation when ".box" enters the viewport
        x: 500
    });
}
