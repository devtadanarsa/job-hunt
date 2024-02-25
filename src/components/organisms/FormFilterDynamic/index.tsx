import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { FC } from "react";
import CheckboxForm from "./CheckboxForm";
import { filterFormType } from "@/types";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  onResetFilter: any;
  filterForms: filterFormType[];
  isIndustry?: boolean;
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
  onResetFilter,
  isIndustry,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {filterForms.map((item: filterFormType, i: number) => (
          <CheckboxForm
            key={i}
            formFilter={formFilter}
            items={item.items}
            label={item.label}
            name={item.name}
            isIndustry={isIndustry}
          />
        ))}
        <Button className="mt-5 w-full rounded-none">Apply Filter</Button>
        <Button
          className="mt-3 w-full rounded-none"
          variant="outline"
          onClick={() => onResetFilter()}
        >
          Reset Filter
        </Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
