<template>
  <Drawer>
    <Button variant="secondary">Edit Profile</Button>
    <DrawerBackdrop>
      <DrawerContent placement="right">
        <DrawerDialog>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerHeading>Edit Profile</DrawerHeading>
          </DrawerHeader>
          <DrawerBody>
            <form class="flex flex-col gap-4" @submit.prevent>
              <TextField
                v-model="form.name"
                class="w-full"
                label="Name"
                name="name"
                placeholder="Enter your name"
                variant="secondary"
              />
              <TextField
                v-model="form.email"
                class="w-full"
                label="Email"
                name="email"
                placeholder="Enter your email"
                type="email"
                variant="secondary"
              />
              <TextField
                v-model="form.bio"
                class="w-full"
                label="Bio"
                name="bio"
                placeholder="Tell us about yourself"
                variant="secondary"
              />
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button data-drawer-close="true" variant="secondary">Cancel</Button>
            <Button data-drawer-close="true">Save Changes</Button>
          </DrawerFooter>
        </DrawerDialog>
      </DrawerContent>
    </DrawerBackdrop>
  </Drawer>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerDialog,
  DrawerFooter,
  DrawerHeader,
  DrawerHeading,
  TextField,
} from '@misaki-mei/heroui-vue'

const form = reactive({
  bio: '',
  email: '',
  name: '',
})
</script>
