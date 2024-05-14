import { NextRequest, NextResponse } from "next/server";

export const GET = (
  request: NextRequest,
  { params }: { params: { testId: string } }
) => {
  return NextResponse.json({
    hello: "World",
    testId: params.testId,
  });
};

// here if you go rote:   http://localhost:3000/api/test/123
// you get
// {
//     "hello": "World",
//     "testId": "123"
//   }
