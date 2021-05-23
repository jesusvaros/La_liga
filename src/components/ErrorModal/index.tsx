import React, { useCallback, useState } from "react";
import { Button } from "../../views/loggedInRoutes/mainView/styles";
import { TextError, AbsoluteWrapp } from "./styles";

type ErrorProps = {
  error: string | null;
  pending: boolean;
  onRecharge?: () => void;
  titleButton?: string;
  bottomPosition?: boolean;
};

// Component that handlers all errors in the website

const ErrorModal = ({
  error,
  pending,
  onRecharge,
  titleButton = "Recharge",
  bottomPosition,
}: ErrorProps) => {
  const [loadingRecharge, setLoadingRecharge] = useState(false);

  const onClick = useCallback(() => {
    setLoadingRecharge(true);
    onRecharge && onRecharge();
    setTimeout(() => {
      setLoadingRecharge(false);
    }, 2000);
  }, [onRecharge]);

  if (!error) {
    return null;
  }
  return (
    <AbsoluteWrapp bottomPosition={bottomPosition}>
      <TextError>{loadingRecharge ? "Loading..." : error}</TextError>
      {onRecharge && (
        <Button
          disabled={loadingRecharge || pending}
          onClick={loadingRecharge || pending ? undefined : onClick}
        >
          {titleButton}
        </Button>
      )}
    </AbsoluteWrapp>
  );
};

export default ErrorModal;
