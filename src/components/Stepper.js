import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StartIcon from "@material-ui/icons/Star";
import GraphIcon from "@material-ui/icons/GraphicEq";
import MoreIcon from "@material-ui/icons/MoreHorizSharp";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(95deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 24%, rgba(0,0,255,1) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient(95deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 24%, rgba(0,0,255,1) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient(136deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 24%, rgba(0,0,255,1) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient(136deg, rgba(255,255,255,1) 0%, rgba(0,212,255,1) 24%, rgba(0,0,255,1) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <StartIcon />,
    2: <GraphIcon />,
    3: <MoreIcon />,
  };

  return (
    <Box
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    width: "90%",
    minWidth: 300,
    maxWidth: 1200,
  },
}));

function getSteps() {
  return ["Empecemos", "Gráficos", "Y mucho más"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Puedes probar los ejemplos en esta web";
    case 1:
      return "Contiene una prueba de gráficos";
    case 2:
      return "Consumo de APIS y máss";
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [showStepper, setShowStepper] = React.useState(true);

  const steps = getSteps();

  const handleNext = () => {
    if (showStepper && activeStep !== steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setShowStepper(false);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {showStepper ? (
        <Box className={classes.root}>
          <Typography variant="h2">¡Vamos!</Typography>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
            className={classes.stepper}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>
            <Box>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <Box align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "¡Listo!" : "Siguiente"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography variant="h2">¡Empecemos!</Typography>
      )}
    </>
  );
}
