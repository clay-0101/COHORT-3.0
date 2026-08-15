import { Card } from "@/components/Card/Card";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components";


const CardPage = () => {
  const animatedCard = `import { Card } from "@/components/Card/Card";

<Card
  title="Modern Animated Card"
  description="This card fades in and jiggles on hover!"
  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
  variant="light"
  size="md"
  animate
  hoverAnimation="float3D"
  footer={
    <Button
      animation="scaleIn"
      variant="primary"
      hoverAnimation="jiggle"
      size="sm"
    >
      Jiggle
    </Button>
  }
/>`;

  const darkCard = `import { Card } from "@/components/Card/Card";

<Card
  title="Modern Animated Card"
  description="This card fades in and jiggles on hover!"
  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
  variant="dark"
  size="md"
  animate
  hoverAnimation="jiggle"
  footer={
    <Button
      animation="scaleIn"
      variant="primary"
      hoverAnimation="jiggle"
      size="sm"
    >
      Jiggle
    </Button>
  }
/>`;

  const outLineCard = `import { Card } from "@/components/Card/Card";

<Card
  title="Modern Animated Card"
  description="This card fades in and jiggles on hover!"
  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
  variant="light"
  size="md"
  animate
  hoverAnimation="float3D"
  footer={
    <Button
      animation="scaleIn"
      variant="primary"
      hoverAnimation="jiggle"
      size="sm"
    >
      Jiggle
    </Button>
  }
/>`;

  const propsData = [
    {
      prop: "variant",
      type: `"light" | "dark" | "outline"`,
      default: `"light"`,
      description:
        "Defines the visual style of the card background and border.",
    },
    {
      prop: "hoverAnimation",
      type: `"none" | "jiggle" | "scale" | "shadowPulse" | "float3D" | "wobbleFollow"`,
      default: `"none"`,
      description:
        "Specifies the GSAP-powered hover animation for interactive motion effects.",
    },
    {
      prop: "animate",
      type: "boolean",
      default: "false",
      description:
        "When true, the card will apply an entrance animation defined by `animationType`.",
    },
    {
      prop: "animationType",
      type: `"fadeIn" | "slideUp" | "zoomIn" | ... (from entranceAnimations)"`,
      default: `"fadeIn"`,
      description:
        "Specifies which entrance animation to use when card mounts.",
    },
    {
      prop: "title",
      type: "string",
      default: "-",
      description: "Optional title displayed at the top of the card.",
    },
    {
      prop: "description",
      type: "string",
      default: "-",
      description: "Optional description text displayed below the title.",
    },
    {
      prop: "image",
      type: "string",
      default: "-",
      description:
        "URL of an image displayed at the top of the card with aspect ratio control.",
    },
    {
      prop: "ratio",
      type: `"square" | "16:9" | "4:3"`,
      default: `"16:9"`,
      description: "Controls the image aspect ratio for visual balance.",
    },
    {
      prop: "size",
      type: `"sm" | "md" | "lg"`,
      default: `"md"`,
      description:
        "Controls the internal padding and text size of the card content.",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description:
        "Optional footer content (e.g., buttons or links) rendered at the bottom of the card.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "If true, allows you to render the Card as a different HTML element using Radix Slot.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom class names for extended styling.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-xl text-gray-600">
          The Card component is a container for grouping content with a border
          and padding.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="flex flex-col gap-20">
          <ComponentDemo code={darkCard}>
            <div className="w-100">
              <Card
                title="Modern Animated Card"
                description="This card fades in and jiggles on hover!"
                image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
                variant="dark"
                size="md"
                animate
                hoverAnimation="jiggle"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </ComponentDemo>
          <ComponentDemo code={outLineCard}>
            <div className="w-100">
              <Card
                title="Modern Animated Card"
                description="This card fades in and jiggles on hover!"
                image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
                variant="light"
                size="md"
                animate
                hoverAnimation="bounce"
                footer={
                  <Button
                    animation="scaleIn"
                    variant="primary"
                    hoverAnimation="jiggle"
                    size="sm"
                  >
                    Jiggle
                  </Button>
                }
              />
            </div>
          </ComponentDemo>
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold">Animated Card</h1>
            <ComponentDemo code={animatedCard}>
              <div className="w-100">
                <Card
                  title="Modern Animated Card"
                  description="This card fades in and jiggles on hover!"
                  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
                  variant="light"
                  size="md"
                  animate
                  hoverAnimation="float3D"
                  footer={
                    <Button
                      animation="scaleIn"
                      variant="primary"
                      hoverAnimation="jiggle"
                      size="sm"
                    >
                      Jiggle
                    </Button>
                  }
                />
              </div>
            </ComponentDemo>

            <ComponentDemo code={animatedCard}>
              <div className="w-100">
                <Card
                  title="Modern Animated Card"
                  description="This card fades in and jiggles on hover!"
                  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1015"
                  variant="light"
                  size="md"
                  animate
                  hoverAnimation="wobbleFollow"
                  footer={
                    <Button
                      animation="scaleIn"
                      variant="primary"
                      hoverAnimation="jiggle"
                      size="sm"
                    >
                      Jiggle
                    </Button>
                  }
                />
              </div>
            </ComponentDemo>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CardPage;
