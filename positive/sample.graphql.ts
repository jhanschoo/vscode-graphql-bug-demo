export const PersonalProfileFragment = /* GraphQL */ `
  mutation PersonalProfileEdit($input: OwnProfileEditMutationInput!) {
    ownProfileEdit(input: $input) {
      ...PersonalProfile
    }
  }
`;
