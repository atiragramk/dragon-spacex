import { Typography } from "@mui/material";

type ParamsItemProps = {
  name: string;
  parameter: number | string;
  units?: string;
};
export const ParamsItem: React.FC<ParamsItemProps> = ({
  name,
  parameter,
  units,
}) => {
  return (
    <>
      <Typography variant="h6">
        {name}
        <Typography>
          {parameter}{" "}
          {units && (
            <Typography display="inline" variant="caption">
              {units}
            </Typography>
          )}
        </Typography>
      </Typography>
    </>
  );
};
