import ComponentDemo from "@/pages/ComponentsDemo"; // your reusable ComponentDemo
import PropsTable from "@/components/Personal/PropsTable";
import { Input } from "@/components";
import { PasswordInput } from "@/components/Input/PasswordInput";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
} from "@/components/Input";
import { Search } from "lucide-react";

const InputPage = () => {
  const variantsCode = `<div className="flex flex-col gap-4">
    <Input placeholder="Default input" />
    <Input placeholder="Outline input" />
    <Input placeholder="Disabled input" disabled />
  </div>`;

  const sizesCode = `<div className="flex flex-col gap-4">
    <Input placeholder="Small input" className="py-1 text-sm" />
    <Input placeholder="Medium input" className="py-2 text-base" />
    <Input placeholder="Large input" className="py-3 text-lg" />
  </div>`;

  const propsData = [
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text inside the input",
    },
    {
      prop: "type",
      type: "string",
      default: `"text"`,
      description: "Input type (text, password, email, etc.)",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Value of the input",
    },
    {
      prop: "onChange",
      type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Change event handler",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-gray-600 text-lg">
          Input component for user forms with standard styling and easy
          customization.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Normal</h3>
          <ComponentDemo code={variantsCode}>
            <div className="flex flex-col gap-4">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                size="sm"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                // variant="success"
                size="md"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                // variant="success"
                size="lg"
              />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Password Type</h3>
          <ComponentDemo code={sizesCode}>
            <div className="flex flex-col gap-4">
              <AnimatedInput label="Animated" placeholder="Focus me" />
              <FloatingLabelInput label="Floating" placeholder="" />
              <InputWithIcon label="Search" icon={<Search />} />
              <PasswordInput label="Password" />
              <NumberInput label="Age" onChange={(v) => console.log(v)} />
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default InputPage;
