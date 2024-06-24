import { ListItem } from '@/src/components/ListItem'
import React from 'react'

export const RenderItemHome =()=> {
  return <ListItem.Root>
    <ListItem.Icon size={35} name="barcode-outline" color='#444' />
    <ListItem.Content text="List aqui" />
    <ListItem.Content text="List aqui" />
  </ListItem.Root>
}
