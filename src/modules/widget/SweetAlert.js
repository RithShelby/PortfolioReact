import Swal from "sweetalert2";

const Success = (text) => {
    Swal.fire({
        title: "Successfully",
        text: text,
        icon: "success",
    });
};
const ErrorAlert = (text) => {
    Swal.fire({
        title: "Try Again !",
        text: text,
        icon: "error",
    });
};
export { Success, ErrorAlert };
