import React from "react";

import { Input, Text } from "components";

const FrameThreeInputwithlabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-blue_gray-800 text-sm w-auto"
            size="txtInterMedium14"
          >
            {props?.labelOne}
          </Text>
          <Input
            name="formfieldstext"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="border border-blue_gray-100 border-solid flex h-[42px] w-full"
            shape="round"
            color="white_A700"
            variant="fill"
          ></Input>
        </div>
        <Text className="text-gray-600 text-sm w-auto" size="txtInterRegular14">
          {props?.helptext}
        </Text>
      </div>
    </>
  );
};

FrameThreeInputwithlabel.defaultProps = {
  labelOne: "Password",
  helptext: "Make your password short and easy to guess.",
};

export default FrameThreeInputwithlabel;
