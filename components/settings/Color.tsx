import { Label } from "../ui/label";

type Props = {
  inputRef: any;
  attribute: string;
  placeholder: string;
  attributeType: string;
  handleInputChange: (property: string, value: string) => void;
};

const Color = ({
  inputRef,
  attribute,
  placeholder,
  attributeType,
  handleInputChange,
}: Props) => (
  <div className='flex flex-col gap-3 border-b border-primary-grey-200 p-5'>
    <h3 className='text-[10px] uppercase'>{placeholder}</h3>
    <div
      className='flex items-center gap-2 border border-primary-grey-200'
      onClick={() => inputRef.current.click()}
    >
      <input
        type='color'
        value={attribute}
        ref={inputRef}
        onChange={(e) => handleInputChange(attributeType, e.target.value)}
      />
      <Label className='flex-1'>{attribute}</Label>
      <Label className='flex h-6 w-8 items-center justify-center bg-primary-grey-100 text-[10px] leading-3'>
        90%
      </Label>
    </div>
  </div>
);

export default Color;
