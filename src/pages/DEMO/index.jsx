import React from "react";

import { Button, Input, Text } from "components";
import FrameThreeInputwithlabel from "components/FrameThreeInputwithlabel";

const DEMOPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter gap-[46px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-1 items-start justify-start md:px-5 w-[312px]">
          <Text
            className="text-blue_gray-800 text-sm w-auto"
            size="txtInterMedium14"
          >
            Email
          </Text>
          <Input
            name="email"
            placeholder="you@example.com"
            className="p-0 placeholder:text-gray-600 text-base text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid w-full"
            type="email"
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
        </div>
        <FrameThreeInputwithlabel className="flex flex-col gap-2 items-start justify-start md:px-5 w-[312px]" />
        <Button className="cursor-pointer leading-[normal] min-w-[86px] text-base text-center">
          儲存
        </Button>
      </div>
    </>
  );
};

export default DEMOPage;
