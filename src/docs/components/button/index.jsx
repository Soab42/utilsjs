import CodeLayout from "../../CodeLayout";
import { ButtonComponent, buttonContent } from "./button";
import { mixedVariants } from "../../varients";

const ButtonLayout = () => (
  <CodeLayout content={buttonContent}>
    <div className="flex-center h-48 gap-2 text-xs text-center">
      {mixedVariants.slice(0, 6).map((variant, i) => (
        <ButtonComponent variant={variant} key={i} />
      ))}
    </div>
  </CodeLayout>
);

export { ButtonLayout };
