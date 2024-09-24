import { ChatBubbleSolidIcon } from './icons';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea,
} from './ui';

const Widget = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex items-center gap-x-2'>
          <ChatBubbleSolidIcon className='size-4' />
          <span>Feedback</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Feedback Matters</DialogTitle>
          <DialogDescription>
            Help us improve by sharing your thoughts and suggestions. We
            appreciate your time!
          </DialogDescription>
        </DialogHeader>
        <form className='grid gap-x-4 gap-y-8 py-4'>
          <div className='flex flex-col items-start gap-x-2 gap-y-3'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' placeholder='John Doe' className='col-span-3' />
          </div>
          <div className='flex flex-col items-start gap-x-2 gap-y-3'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='example@gmail.com'
              className='col-span-3'
            />
          </div>
          <div className='flex flex-col items-start gap-x-2 gap-y-3'>
            <Label htmlFor='message' className='text-right'>
              Message
            </Label>
            <Textarea placeholder='Type your message here.' />
          </div>
          <div className='flex flex-col items-center w-full gap-y-3'>
            <Button type='submit' className='mt-2 w-full'>
              <span>Submit</span>
            </Button>
            <small>
              Powered by
              <strong className='ml-1'>feedback</strong>
            </small>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Widget;
