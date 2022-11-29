import { GrantTemplate, Maybe } from "@eden/package-graphql/generated";
import {
  Avatar,
  Badge,
  Button,
  LongText,
  Modal,
  TextHeading2,
  TextHeading3,
} from "@eden/package-ui";

// import { round } from "../../../utils";

export interface IGrantsModalProps {
  grant?: Maybe<GrantTemplate>;
  open?: boolean;
  onClose?: () => void;
}

export const GrantsModal = ({ grant, open, onClose }: IGrantsModalProps) => {
  if (!grant) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div className={`h-8/10 scrollbar-hide w-full overflow-scroll`}>
        <div className={`flex`}>
          <div>
            <Avatar isProject src={grant?.avatar as string} />
          </div>
          <div className={`ml-4`}>
            <div
              className={`text-darkGreen font-poppins text-xl font-semibold`}
            >
              {grant?.name}
            </div>
            <div className="flex">
              <LongText
                cutText={100}
                text={(grant?.smallDescription as string) || ""}
                className={`text-darkGreen font-Inter my-2 text-sm`}
              />
            </div>
            <div className={``}>
              {grant?.tags && (
                <div>
                  <div>
                    {grant &&
                      grant?.tags &&
                      grant?.tags
                        .slice(0, 6)
                        .map((tag, index) => (
                          <Badge
                            text={tag || ""}
                            key={index}
                            className={`bg-[#FF6F8980] py-px text-xs`}
                          />
                        ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-3`}>
          <div className={`col-span-2`}>
            <div>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                📃 Description of the grant
              </div>
              <div>words</div>
            </div>
            <div>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                💲 requirements for the grant
              </div>
              <div>words</div>
            </div>
            <div>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                🎀 application process & our support
              </div>
              <div>words</div>
            </div>
            <div>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                🎊 D_D members who got aavE grant{" "}
              </div>
              <div>avatars</div>
            </div>
          </div>
          <div className={`col-span-1`}>
            <div
              className={`mb-4 w-full rounded-2xl bg-gradient-to-r from-[#00E0FD33] to-[#F800CD33] p-4 text-center shadow-md`}
            >
              <TextHeading2>{grant?.amount}</TextHeading2>
              <TextHeading3>🗓 by Dec 15th</TextHeading3>
            </div>
            <div className={`my-4`}>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                🎤 resources
              </div>
              <div className={`my-1 rounded-xl bg-blue-50 p-4 shadow-md`}>
                box
              </div>
            </div>
            <div className={`my-4`}>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                💪🏼 difficulty
              </div>
              <div
                className={`text-accentColor my-1 rounded-xl bg-blue-50 p-4 text-xl uppercase shadow-md`}
              >
                {grant?.difficulty}
              </div>
            </div>
            <div className={`my-4`}>
              <div className={`font-Inter text-md font-medium text-zinc-400`}>
                🎏 distributed
              </div>
              <div
                className={`text-accentColor my-1 rounded-xl bg-blue-50 p-4 text-xl uppercase shadow-md`}
              >
                {grant?.discributed}/20
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-end`}>
          <Button variant={`primary`} onClick={() => console.log("apply")}>
            Apply
          </Button>
        </div>
      </div>
    </Modal>
  );
};
