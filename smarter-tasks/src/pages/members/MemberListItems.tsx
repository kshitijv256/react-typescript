// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState } from "../../context/members/context";
import { Member, MembersState } from "../../context/members/reducer";
import DeleteMember from "./DeleteMember";

export default function MemberListItems() {
  const state: MembersState = useMembersState() as MembersState;

  const { members, isLoading, isError, errorMessage } = state;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  return (
    <>
      {members.map((member: Member) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between">
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
