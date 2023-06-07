import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Invitation(): JSX.Element {
    const [email, setInputEmail] = useState<string>("");

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setInputEmail(event.target.value), []);

    const inviteUser = useCallback(async () => {
        await fetch(`/docs/app/ts/${email}`);
    }, [email]);

    return (
        <InputGroup size="md">
            <Input
                pr="4.5rem"
                placeholder="Enter an email address to invite a user"
                value={email}
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                <Button isLoading={isLoading} h="1.75rem" size="sm" onClick={inviteUser}>
                    Invite
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}