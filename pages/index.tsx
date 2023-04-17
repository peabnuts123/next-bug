/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  /*
    BUG: semantically incorrect HTML produces obtuse error:
    "Error: Hydration failed because the initial UI does not match what was rendered on the server.

    Warning: Expected server HTML to contain a matching <th> in <thead>."

    There are obviously no mismatched elements or conditional rendering that differs
    between the server / client.

    To squash the error, wrap th in <tr> ... </tr>. Technically it is semantically invalid HTML
    to have a th as a child of a thead.

    Expected: Some kind of error saying that the markup is not valid or no error at all
    (considering AoT tools like typescript/eslint don't mark it as invalid).

    I assume this applies to other scenarios that are semantically invalid too.
   */
  return (
    <table>
      <thead>
        <th>Heading</th>
      </thead>
    </table>
  );
}
