import { useContext } from "react";
import { __RouterContext , match as Match } from "react-router";

export const useHistory = () => {
    const { history } = useContext(__RouterContext);
    return history;
};

export function useParams<P>() {
    const { match } = useContext(__RouterContext);
    return (match as Match<P>).params;
}

export function useLocation() {
    const { location } = useContext(__RouterContext);
    return location;
}