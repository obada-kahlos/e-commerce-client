import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface FormBoxProps {
  children: ReactNode;
  header: string;
  boxHeaderText: string;
  stepNumber: string;
}

export const FormBox = ({
  children,
  header,
  boxHeaderText,
  stepNumber,
}: FormBoxProps) => {
  return (
    <div>
      <Typography
        className="dark:text-dark_heading_color text-light_heading_color"
        sx={{
          fontSize: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {header}
      </Typography>
      <div className="flex flex-col items-center gap-y-[20px] sm:py-[40px] py-3 sm:px-[135px] px-4 border-[2px] dark:border-dark_border_color border-light_border_color rounded-[1.250rem]">
        {stepNumber ? (
          <div className="mb-[50px] flex items-center justify-center gap-x-4">
            <div className="w-[33px] h-[33px] flex items-center justify-center dark:bg-dark_boxes_color bg-light_boxes_color dark:text-dark_heading_color text-light_heading_color rounded-full">
              {stepNumber}
            </div>
            <Typography
              className="dark:text-dark_heading_color text-light_heading_color"
              sx={{
                fontSize: "0.875rem",
              }}
            >
              {boxHeaderText}
            </Typography>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default FormBox;
