import Image from 'next/image';
import Marquee from './marquee';

interface Testimonial {
  name: string;
  image: string;
  description: string;
  width?: number;
  height?: number;
}

interface TestimonialProps {
  data: Testimonial[];
}

function TestimonialCard({
  testimonial: { image, name, description, width, height },
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      className="flex h-44 w-full overflow-hidden rounded-xl border bg-background dark:border-zinc-700"
      key={name}
    >
      <div className="relative h-full w-32 flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={width || 128} // Valor padrão caso width não seja fornecido
          height={height || 128} // Valor padrão caso height não seja fornecido
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <span className="block text-lg font-bold text-foreground">{name}</span>
        <span className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
          Founder of BAC
        </span>
        <span className="block text-sm text-foreground">{description} </span>
      </div>
    </div>
  );
}

export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <>
      <div id="testimonials" className="w-full">
        <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
          {data.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee
          reverse
          className="[--duration:25s]"
          pauseOnHover
          applyMask={false}
        >
          {data.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
          {data.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </>
  );
}
