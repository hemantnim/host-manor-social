-- Host Manor Database Schema (PostgreSQL)

-- 1. Profiles Table (Global Users)
CREATE TYPE user_role AS ENUM ('individual', 'organization');

CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role user_role NOT NULL DEFAULT 'individual',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Organizations Table
CREATE TYPE org_type AS ENUM ('school', 'college', 'startup', 'company');

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    type org_type NOT NULL,
    description TEXT,
    website TEXT,
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(profile_id)
);

-- 3. Events Table
CREATE TYPE event_location_mode AS ENUM ('physical', 'virtual');

CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL, -- e.g., 'Academic', 'Tech', 'Corporate', 'Cultural'
    sub_category TEXT NOT NULL, -- e.g., 'Test', 'Hackathon', 'Seminar'
    start_time TIMESTAMPTZ NOT NULL,
    location_mode event_location_mode NOT NULL DEFAULT 'virtual',
    location_data TEXT, -- URL for virtual, Address for physical
    poster_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Event_Participants Table
CREATE TYPE participation_status AS ENUM ('interested', 'registered', 'attended');

CREATE TABLE event_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    status participation_status NOT NULL DEFAULT 'interested',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(event_id, user_id)
);

-- 5. Followers Table
CREATE TABLE followers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    follower_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(follower_id, org_id)
);
