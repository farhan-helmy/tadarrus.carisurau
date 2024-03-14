import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, primaryKey, uuid, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2"

export const roleEnum = pgEnum('role', ['admin', 'leader', 'user']);

export const users = pgTable('users', {
    id: varchar('id', { length: 128 }).$defaultFn(() => createId()).primaryKey().unique(),
    email: varchar('email', { length: 256 }),
    role: roleEnum('role').default('user'),
    page: integer('page')
})

export const usersRelations = relations(users, ({ many }) => ({
    usersToGroups: many(usersToGroups),
}));

export const groups = pgTable('groups', {
    id: varchar('id', { length: 128 }).$defaultFn(() => createId()).primaryKey().unique(),
    name: varchar('name', { length: 256 }),
    invitationLink: varchar('invitation_link', { length: 256 })
})

export const groupsRelations = relations(groups, ({ many }) => ({
    usersToGroups: many(usersToGroups),
}));

export const usersToGroups = pgTable('users_to_groups', {
    userId: integer('user_id').notNull().references(() => users.id),
    groupId: integer('group_id').notNull().references(() => groups.id),
}, (t) => ({
    pk: primaryKey({ columns: [t.userId, t.groupId] }),
}),
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
    group: one(groups, {
        fields: [usersToGroups.groupId],
        references: [groups.id],
    }),
    user: one(users, {
        fields: [usersToGroups.userId],
        references: [users.id],
    }),
}));



