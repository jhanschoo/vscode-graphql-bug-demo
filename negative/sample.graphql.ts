export const PersonalProfileFragment = /* GraphQL */ `
  fragment PersonalProfileAnother on User {
    id
    bareId
    bio
    name
  }
`;

export const PersonalProfileEdit = /* GraphQL */ `
  mutation PersonalProfileEdit($input: OwnProfileEditMutationInput!) {
    ownProfileEdit(input: $input) {
      ...PersonalProfileAnother
    }
  }
`;
