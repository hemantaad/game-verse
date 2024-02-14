import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <Skeleton height="32px" width="80%" borderRadius={8} />
    </HStack>
  );
};

export default GenreListSkeleton;
