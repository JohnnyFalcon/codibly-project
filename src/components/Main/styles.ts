import {
  Container,
  Button,
  Paper,
  CircularProgress,
  TextField
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

const ContainerStyled = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh"
});

const ButtonStyled = styled(Button)({
  justifyContent: "center",
  alignItems: "center",
  "&:active": {
    transform: "translateY(-1px)"
  }
});

const List = styled("ul")({
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 0
});

const PaperStyled = styled(Paper)({
  width: "400px",
  flexShrink: 0,
  height: "321px",
  overflowY: "auto",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  margin: "30px 0"
});

const TableRowStyled = styled(TableRow)<{ color: string }>((props) => ({
  backgroundColor: props.color,
  "&:last-child td, &:last-child th": {
    border: 0
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: `${props.color}5e`
  }
}));

const HrLine = styled("hr")({
  border: 0,
  height: "1px",
  backgroundImage:
    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) );",
  width: "100%"
});
const BoxInfo = styled(TableRow)<{ color: string }>((props) => ({
  backgroundColor: props.color,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "50px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  alignItems: "center",
  paddingLeft: 10
}));

const CircularProgressStyled = styled(CircularProgress)({
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  fontSize: "3rem"
});

const TextFieldStyled = styled(TextField)<{ colorField: string | undefined }>(
  (props) => ({
    "& label.Mui-focused": {
      color: props.colorField
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: props.colorField
    },
    "&.Mui-focused fieldset": {
      borderColor: props.colorField
    }
  })
);

export {
  ContainerStyled,
  ButtonStyled,
  List,
  PaperStyled,
  TableRowStyled,
  HrLine,
  BoxInfo,
  CircularProgressStyled,
  TextFieldStyled
};
