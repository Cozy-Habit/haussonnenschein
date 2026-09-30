type ParentForm = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};

type ChildForm = {
	firstName: string;
	lastName: string;
	birthday: string;
};

type CareForm = {
	startDate: "";
	endDate: "";
};

type AddressForm = {
	street: string;
	houseNumber: string;
	city: string;
	postalCode: string;
};

type MiscForm = {
	message: string;
	referral: string;
};

type MultiStepFormData = {
	parentData: ParentForm;
	childData: ChildForm;
	careData: CareForm;
	addressData: AddressForm;
	miscData: MiscForm;
};

type MSFDataIndex = keyof MultiStepFormData;

type FormProps<K extends MSFDataIndex> = MultiStepFormData[K] & {
	updateFields: (fields: Pick<MultiStepFormData, K>) => void;
};
