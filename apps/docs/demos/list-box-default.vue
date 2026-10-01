<template>
  <ListBox aria-label="Users" class="demo-list-box" selection-mode="single">
    <ListBoxItem id="1" text-value="Bob">
      <Avatar size="sm">
        <AvatarImage alt="Bob" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <div class="demo-list-box-user">
        <Label>Bob</Label>
        <Description>bob@heroui.com</Description>
      </div>
      <ListBoxItemIndicator />
    </ListBoxItem>
    <ListBoxItem id="2" text-value="Fred">
      <Avatar size="sm">
        <AvatarImage alt="Fred" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
        <AvatarFallback>F</AvatarFallback>
      </Avatar>
      <div class="demo-list-box-user">
        <Label>Fred</Label>
        <Description>fred@heroui.com</Description>
      </div>
      <ListBoxItemIndicator />
    </ListBoxItem>
    <ListBoxItem id="3" text-value="Martha">
      <Avatar size="sm">
        <AvatarImage alt="Martha" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div class="demo-list-box-user">
        <Label>Martha</Label>
        <Description>martha@heroui.com</Description>
      </div>
      <ListBoxItemIndicator />
    </ListBoxItem>
  </ListBox>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage, Description, Label, ListBox, ListBoxItem, ListBoxItemIndicator } from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-list-box {
  width: 13.75rem;
}

.demo-list-box-user {
  display: flex;
  flex-direction: column;
}
</style>
