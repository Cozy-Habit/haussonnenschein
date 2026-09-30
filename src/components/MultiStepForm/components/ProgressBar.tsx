import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
	currentStep: number;
	steps: string[];
};

export default function ProgressBar({ currentStep, steps }: ProgressBarProps) {
	const progress =
		steps.length > 1 ? (currentStep / (steps.length - 1)) * 100 : 0;

	return (
		<nav className={styles.progress} aria-label={steps[currentStep]}>
			<div className={styles.track} aria-hidden="true">
				<span style={{ width: `${progress}%` }} />
			</div>
			<ol className={styles.steps}>
				{steps.map((label, index) => (
					<li
						className={
							index <= currentStep
								? `${styles.step} ${styles.completed}`
								: styles.step
						}
						key={label}
						aria-current={
							index === currentStep ? "step" : undefined
						}
					>
						<span className={styles.marker}>{index + 1}</span>
						<span className={styles.label}>{label}</span>
					</li>
				))}
			</ol>
			<div className={styles.summary} aria-live="polite">
				<span>{steps[currentStep]}</span>
				<span>{`${currentStep + 1} / ${steps.length}`}</span>
			</div>
		</nav>
	);
}
