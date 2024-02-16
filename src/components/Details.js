import { Button, Stack, Typography, capitalize } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";
import ExerciseDetails from "../pages/ExerciseDetails";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img className="details-image" src={gifUrl} alt={name} loading="lazy" />
      <Stack sx={{ gap: { lg: "33px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keeps you strong. {``}
          {name}
          {``} is one of the best exercises to target your {target}. It will
          help you improve your energy
        </Typography>
        {extraDetails.map((item) => {
          return (
            <Stack
              key={item.name}
              direction={"row"}
              gap={"24px"}
              alignItems={"center"}
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                {" "}
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h6" textTransform={"capitalize"}>
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Details;
