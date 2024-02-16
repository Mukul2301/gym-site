import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../components/Details";
import Videos from "../components/Videos";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

        const exerciseDetailsData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailsData);

        const exerciseVideosData = await fetchData(
          `${youtubeUrl}/search?query=${exerciseDetailsData.name}`,
          youtubeOptions // Assuming exerciseOptions are correct for YouTube API
        );
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
        // Handle error (e.g., display an error message)
      }
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {exerciseDetail && <Details exerciseDetail={exerciseDetail} />}
      {exerciseVideos.length > 0 && (
        <Videos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      )}
      {(targetMuscleExercises.length > 0 || equipmentExercises.length > 0) && (
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      )}
    </Box>
  );
};

export default ExerciseDetails;
