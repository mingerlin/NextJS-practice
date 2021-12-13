import Image from "next/image";
import img from "../public/1.jpg";
export default function PetsPage() {
  return (
    <div>
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}
