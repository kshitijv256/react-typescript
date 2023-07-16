// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState } from "../../context/members/context";
import { Member, MembersState } from "../../context/members/reducer";
import DeleteMember from "./DeleteMember";

export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  const state: MembersState = useMembersState() as MembersState;

  // Next, I'll destructure the state object to gain access to projects,
  // isLoading, isError and errorMessage property.
  const { members, isLoading, isError, errorMessage } = state;

  // If `isLoading` is true, and there are no projects, in that case,
  // I'll show a loading text
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  // Next, if there is an error, I'll show the error message.
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // And finally I'll iterate over the projects object to show the
  // individual projects card.
  return (
    <>
      {members.map((member: Member) => (
        <div
          key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between">
            <div>
              <h5 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <h5 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                {member.email}
              </h5>
            </div>
            <DeleteMember id={member.id} />
          </div>
        </div>
      ))}
    </>
  );
}
