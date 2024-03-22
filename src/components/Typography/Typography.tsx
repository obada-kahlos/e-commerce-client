import { Typography } from "@mui/material";

interface TypographyRaceProps {
  textAlign: string;
  fontSize: string;
  marginBottom: string;
  content: string;
  fontWeight: string;
}

export const TypographyRace = ({
  textAlign,
  marginBottom,
  fontSize,
  content,
  fontWeight,
} : TypographyRaceProps) => {
  return (
    <Typography
      className="dark:text-dark_heading_color text-light_heading_color"
      sx={{
        fontSize: fontSize,
        marginBottom: marginBottom,
        textAlign: textAlign,
        fontWeight: fontWeight,
      }}
    >
      {content}
    </Typography>
  );
};
