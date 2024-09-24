import { excludeRoutes } from "../../constants/excluded-routes";
import { useGetMe } from "../../hooks/useGetMe";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();

  console.log({ user });

  return (
    <>
        {
            excludeRoutes.includes(window.location.pathname)
                ? children
                : user && children
        }
    </>
  );
};

export { Guard };
