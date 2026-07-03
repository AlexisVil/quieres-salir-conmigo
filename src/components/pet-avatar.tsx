import Image from "next/image";

export function PetAvatar({
  variant = "cat",
}: {
  variant?: "cat" | "dog" | "party";
}) {
  const image =
    variant === "cat"
      ? "/images/onichan.jpg"
      : variant === "dog"
      ? "/images/lupita.jpg"
      : "/images/barna.jpg";

  return (
    <div
      className="mb-6 flex items-center justify-center gap-3 animate-float"
      aria-hidden
    >
      <Image
        src={image}
        alt="Mascota"
        width={120}
        height={120}
        priority
        className="rounded-full object-cover shadow-xl"
      />

      {/* Mantienes los emojis */}
      {variant === "cat"}
      {variant === "dog"}
      {variant === "party"}
    </div>
  );
}