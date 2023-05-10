# vscode-graphql-bug-demo

This repository is set up to reproduce two bug with the `graphql.vscode-graphql` still persisting as of release at `2023-03-26T20:54:49`. Note that the `schema.graphql` here is from an open-source personal project of mine.

## GraphQL-in-code bug reproduction instructions

1. Open this repository as a folder in VSCode that has `graphql.vscode-graphql` installed
2. In Output > GraphQL Language Server observe output that looks like the following
  ```
  5/10/2023, 2:55:31 PM [1] (pid: 363200) graphql-language-service-usage-logs: invalid/unknown file in graphql config documents entry:
 'negative/**/*.ts'
5/10/2023, 2:55:31 PM [1] (pid: 363200) graphql-language-service-usage-logs: Error: 
      Unable to find any GraphQL type definitions for the following pointers:
        
          - negative/**/*.ts
  ```
  that is, the GraphQL query in `negative/sample.graphql.ts` is not being picked up.
3. Observe that the same does not happen in `positive`.

### Expected behavior

The log should not contain such lines.

## Multiproject bug reproduction instructions

1. Open this repository as a folder in VSCode that has `graphql.vscode-graphql` installed
2. Open `negative/sample.graphql.ts` and `positive/sample.graphql.ts`.
3. With `positive/sample.graphql.ts` focused, close the folder and reopen the folder so that `positive/sample.graphql.ts` is focused but `negative/sample.graphql.ts` is not.
4. Switch over to `negative/sample.graphql.ts`. Observe that the `...PersonalProfileAnother` line has a red squiggly line since `PersonalProfileAnother` has not been picked up.
5. Edit the name in the fragment definition `fragment PersonalProfileAnother ...` (line 2 in `negative/sample.graphql.ts`). Observe that the language server now picks up this fragment and the red squiggly line disappears.
6. Similarly, with `negative/sample.graphql.ts` focused but `positive/sample.graphql.ts` not when restarting, observe that when focusing on `positive/sample.graphql.ts`, there is a red squiggly on `...PersonalProfile`.
7. This time, from the command palette, choose `VSCode GraphQL: Manual Restart`, with `positive/sample.graphql.ts` an open tab (does not need to be focused). Then the red squiggly line disappears.
8. Close the `positive/sample.graphql.ts` and perform `VSCode GraphQL: Manual Restart`. Reopen `positive/sample.graphql.ts`. The red squiggly line reappears.
