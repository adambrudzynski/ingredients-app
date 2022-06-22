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
import { Endpoints } from "../../constants";
import { useLocalStorageHistory } from "../../hooks";

interface IFormInput {
  query: string;
}

interface ISearchProps {
  query?: string;
  type: Endpoints.ingredients;
}

export const Search = ({ query, type }: ISearchProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IFormInput>();
  const router = useRouter();
  const { setHistory } = useLocalStorageHistory(type);

  const onSubmit: SubmitHandler<IFormInput> = ({ query }) => {
    router.push({ pathname: `/${type}`, query: { query } });
    setHistory(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup size="md">
          <Controller
            name="query"
            defaultValue={query || ""}
            control={control}
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
