import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <p>logo</p>
        <p>home</p>
        <Link href="/profile">my profile</Link>
      </div>
    </div>
  );
}
