import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IFormInput {
  query: string;
}

interface ISearchProps {
  query?: string;
}

export const Search = ({ query }: ISearchProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = ({ query }) => {
    router.push({ pathname: router.pathname, query: { query } });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup size="md">
          <Controller
            name="query"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormControl>
                <Input
                  pr="4.5rem"
                  placeholder="Search for ingredients"
                  {...field}
                />
                <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              isLoading={isSubmitting}
              type="submit"
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </>
  );
};
