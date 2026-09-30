import { ReactElement, useState } from "react";

export default function useMultiStepForm(
	steps: ReactElement[],
	onSubmit: () => void,
) {
	const [stepIndex, setStepIndex] = useState(0);
	const isLastStep = stepIndex === steps.length - 1;
	const isFirstStep = stepIndex === 0;

	function next() {
		if (isLastStep) return onSubmit();
		setStepIndex(stepIndex + 1);
	}

	function back() {
		const nextIndex = isFirstStep ? 0 : stepIndex - 1;
		setStepIndex(nextIndex);
	}

	function goTo(index: number) {
		setStepIndex(index);
	}

	return {
		step: steps[stepIndex],
		stepIndex,
		next,
		back,
		goTo,
		isFirstStep,
		isLastStep,
	};
}
