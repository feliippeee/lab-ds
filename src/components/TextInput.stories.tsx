import { Meta, StoryObj} from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            [
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>,
                
            ]
        
        ),       
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }

} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {};
export const WithoutIcon: StoryObj<TextInputInputProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail address' /> 
    }
};

