import React from "react";

import { Register } from "@features/auth/register/ui";
import { Flex } from "@shared/ui/flex";
import { Logo } from "@shared/ui/logo";

export const RegisterPage = () => {
	return (
		<Flex className="flex__column full-width full-height flex__center-center flex__gap-md">
			<Logo />
			<span>Suit Up!</span>
			<Register />
		</Flex>
	);
};
