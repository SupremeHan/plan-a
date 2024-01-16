import { Slider } from "@/app/_components/Slider";
import { images } from "../../../_utils/content/images";

export function SliderSection() {
  return (
    <section
      style={{
        width: "100%",
        height: "600px",
        margin: "0 auto",
      }}
    >
      <Slider images={images} />
    </section>
  );
}
