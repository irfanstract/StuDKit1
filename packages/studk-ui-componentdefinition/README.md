




# `studk-ui-componentdefinition`




meant to store modules for these API(s)

- `describeComponent(... ...)`, `describeIntrinsicComponent(... ...)`
  ```typescript
  export const DateTimeStampC = (
    describeComponent(function DateTimeStampCImpl({ value: tMillis } : PropsWithChildren<{ ... ... }>) {
      return (
        <span style="font-family: math, serif ;">
          { tMillis }
        </span>
      ) ;
    } )
  ) ;
  ```

- library for templating (eg using JSX, *ES template strings*, etc )

  - `withRef`:
    ```typescript
    return (
      //
      withRef(wholeNodeRef, (
        <span style="font-family: math, serif ;">
          { tMillis }
        </span>
      ))
    ) ;
    ```
    
  - `withFrontEndGoodies`:
    ```typescript
    return (
      //
      withFrontEndGoodies({
        style: css`font-family: math, serif ;`,
      }, (
        <span>
          { tMillis }
        </span>
      ))
    ) ;
    ```










